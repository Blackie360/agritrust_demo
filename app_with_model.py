import streamlit as st
import pandas as pd
import numpy as np
import shap
import matplotlib.pyplot as plt
import os

# ====== DUMMY MODEL SETUP (No .joblib files required) ======
# Instead of loading a real ML model, simulate predictions
def fake_predict_proba(X):
    base = (X['farm_income'] / 1000000 + X['prev_loans_repaid_pct'] / 100 + X['referral_trust_score'] / 100) / 3
    noise = np.random.normal(0, 0.05)
    prob = np.clip(base + noise, 0, 1)
    return np.array([[1 - prob, prob]]).reshape(1, 2)

# ====== STREAMLIT UI ======
st.set_page_config(page_title="AgriTrust AI - Live Demo", layout="wide")
st.title("🌾 AgriTrust AI - AgriScore Demo")
st.write("Simulated demo showing AgriScore, SHAP explainability, and Loan Simulation")

# Sidebar inputs
st.sidebar.header("Farmer Profile")
age = st.sidebar.slider("Age", 20, 70, 35)
years_experience = st.sidebar.slider("Years of Experience", 0, 40, 5)
education = st.sidebar.selectbox("Education", ["None","Primary","Secondary","College"])
farm_size = st.sidebar.number_input("Farm Size (acres)", 0.5, 100.0, 2.0)
crop_type = st.sidebar.selectbox("Crop Type", ["Maize","Tea","Coffee","Vegetables"])
region = st.sidebar.selectbox("Region", ["Rift Valley","Central","Western","Eastern"])
rainfall = st.sidebar.slider("Rainfall (mm)", 0, 400, 120)
previous_yield = st.sidebar.slider("Previous Yield (kg/acre)", 200, 10000, 2500)
input_quality = st.sidebar.selectbox("Input Quality", ["Certified","Non-Certified"])
farm_income = st.sidebar.number_input("Estimated Farm Income (KES)", 1000, 1000000, 50000)
prev_loans_repaid_pct = st.sidebar.slider("Previous Loans Repaid %", 0, 100, 80)
cooperative = st.sidebar.selectbox("Cooperative Member", ["Yes","No"])
referral_trust_score = st.sidebar.slider("Referral Trust Score (0-100)", 0, 100, 50)

data = {
    "age": [age],
    "years_experience": [years_experience],
    "farm_size": [farm_size],
    "rainfall": [rainfall],
    "previous_yield": [previous_yield],
    "input_quality": [1 if input_quality=="Certified" else 0],
    "farm_income": [farm_income],
    "prev_loans_repaid_pct": [prev_loans_repaid_pct],
    "cooperative": [1 if cooperative=="Yes" else 0],
    "referral_trust_score": [referral_trust_score]
}
df_input = pd.DataFrame(data)

st.subheader("Input Summary")
st.write(df_input)

if st.button("Generate AgriScore & Explanation"):
    prob = fake_predict_proba(df_input)[:,1][0]
    raw_score = int(300 + prob * 600)
    st.metric("AgriScore", raw_score)
    st.metric("Repayment Probability", f"{prob*100:.1f}%")

    # Fake SHAP explanation
    shap_values = np.random.normal(0, 0.05, len(df_input.columns))
    shap_df = pd.DataFrame({"feature": df_input.columns, "shap_value": shap_values})
    shap_df = shap_df.sort_values("shap_value", key=abs, ascending=False).head(8)
    st.write("### SHAP Explanation (Simulated)")
    st.table(shap_df)

    fig, ax = plt.subplots(figsize=(6,4))
    shap_df.set_index("feature")["shap_value"].plot(kind="barh", ax=ax)
    plt.title("SHAP Feature Impact (Simulated)")
    st.pyplot(fig)

    st.write("---")
    st.write("### Loan Simulation")
    loan_amt = st.number_input("Desired Loan Amount (KES)", 5000, 500000, 50000)
    interest = st.slider("Interest Rate (%)", 3.0, 25.0, 10.0)
    months = st.slider("Repayment Months", 3, 36, 12)
    monthly_payment = (loan_amt * (1 + interest/100)) / months
    st.write(f"Estimated Monthly Payment: KES {monthly_payment:,.0f}")

    scenario = st.selectbox("Scenario", ["Normal", "Drought", "Excess Rain"])
    if scenario == "Drought":
        adj_prob = max(0, prob - 0.25)
        st.warning("🌵 Drought scenario - repayment probability reduced.")
    elif scenario == "Excess Rain":
        adj_prob = max(0, prob - 0.15)
        st.warning("🌧️ Excess rain scenario - repayment probability slightly reduced.")
    else:
        adj_prob = prob

    st.metric("Adjusted Repayment Probability", f"{adj_prob*100:.1f}%")
    st.write("Recommendation:")
    if adj_prob > 0.7:
        st.success("✅ Eligible for full funding with milestone disbursements.")
    elif adj_prob > 0.5:
        st.info("⚙️ Eligible for starter funding with progressive disbursement.")
    else:
        st.error("🚫 Not recommended for standard funding; consider training or group loan.")

st.markdown('---')
st.caption("This demo uses simulated AI predictions for hackathon visualization only.")