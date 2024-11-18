def calculate_discount(price, discount_percent):
    """
    Calculate the final price after applying a discount.

    Parameters:
    price (float): The original price of the item.
    discount_percent (float): The discount percentage.

    Returns:
    float: The final price after applying the discount if it's 20% or higher,
           otherwise returns the original price.
    """
    # Check if discount is 20% or higher
    if discount_percent >= 20:
        discount_amount = price * (discount_percent / 100)
        final_price = price - discount_amount
        return final_price
    else:
        return price

# Example values
original_price = 2000
discount_percentage = 50

# Calculate the final price using the function
final_price = calculate_discount(original_price, discount_percentage)

# Print the final price or original price if no discount was applied
if final_price != original_price:
    print(f"The final price after applying the discount is: {final_price}")
else:
    print(f"No discount applied. The original price is: {original_price}")
