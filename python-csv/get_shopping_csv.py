import csv

shopping_rows_list = []

with open("products.csv", newline="") as csv_file:
    csv_reader = csv.reader(csv_file)

    for row in csv_reader:
        amount = float(row[1])
        if amount > 0:
            shopping_rows_list.append(row)

print(shopping_rows_list)
with open("shopping_list.csv", "w", newline="") as csv_file:
    csv_writer = csv.writer(csv_file, delimiter=",")
    for row in shopping_rows_list:
        csv_writer.writerow(row)
