import { Schema, model } from "mongoose";

export const Transaction = model(
  "Transaction",
  new Schema({
    comment: {
      type: String,
    },
    transactionDate: {
      type: Date,
      default: new Date(),
    },
    type: {
      type: String,
      enum: ["INCOME", "EXPENSE"],
      defaykt: "EXPENSE",
    },
    amount: {
      type: Number,
      required: true,
    },
    category: { type: String, default: "default transaction" },
    categoryId: { type: String, default: "6473544cf09b05df28a84d32" },
    userId: { type: String, required: true },
    balanceAfter: {
      type: Number,
    },
  })
);

export const Category = model(
  "categorie",
  new Schema({
    name: { type: String },
    type: { type: String, enum: ["INCOME", "EXPENSE"] },
  })
);
