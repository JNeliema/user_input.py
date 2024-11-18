my_list = []

#appending
my_list.append (10)
my_list.append (20)
my_list.append (30)
my_list.append (40)

#inserting value 15 at the second position in the list
my_list.insert(1, 15)

#Extending the list with another list
my_list.extend([50, 60, 70])

#Removing last element from my list
my_list.pop()

#sorrting list in ascending order
my_list.sort()

#find and print index 30 in the list
index_of_30 = my_list.index(30)

print(f"The index of the value 30 is: {index_of_30}")

# Print the final list for reference 
print("The final sorted list is:", my_list)