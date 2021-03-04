import React from "react";
import styles from "../styles/Home.module.css";

function Input() {
  return (
    <div className={styles.newItemForm}>
      <form className={styles.newAddressForm}>
        <label className={styles.newAddressInput}>
          Address:
          <input
            type="text"
            name="new-property"
            className={styles.newAddress}
          />
        </label>
      </form>
      <form className={styles.newRentForm}>
        <label className={styles.newRentInput}>
          Rent:
          <input
            type="text"
            name="rent-payment"
            className={styles.rentPayment}
          />
        </label>
        <label className={styles.newExpenseInput}>
          Expenses:
          <input type="text" name="expenses" className={styles.expenses} />
        </label>
        <label className={styles.newInputSubmit}>
          <input
            type="submit"
            name="new-row-submit"
            className={styles.rentPayment}
          />
        </label>
      </form>
    </div>
  );
}

export default Input;
