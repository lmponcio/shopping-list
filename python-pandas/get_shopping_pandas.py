import pandas as pd
import sys
import os

if getattr(sys, "frozen", False):
    this_dir = os.path.dirname(sys.executable)
else:
    this_dir = os.path.dirname(os.path.realpath(__file__))
products_path = os.path.join(this_dir, "products.xlsx")

df = pd.read_excel(products_path)
df_output = pd.DataFrame(columns=df.columns)
for idx, row in df.iterrows():
    amount = row[1]
    if amount > 0:
        product = row[0]
        df_output.loc[len(df_output.index)] = [product, amount]

df_output.to_excel(os.path.join(this_dir, "shopping_list.xlsx"))
