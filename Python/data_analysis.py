def read_and_modify_file(input_filename, output_filename):
    try:
        # Read the content from the input file
        with open("example.txt" 'r') as infile:
            content = infile.read()
        
        # Modify the content (for demonstration, we'll just make it uppercase)
        modified_content = content.upper()
        
        # Write the modified content to the output file
        with open("modified_example.txt", 'w') as outfile:
            outfile.write(modified_content)
        
        print(f"Successfully read from {"example.txt"} and wrote to {"modified_example.txt"}")
    
    except FileNotFoundError:
        print(f"Error: The file {"Example.txt"} does not exist.")
    
    except IOError:
        print(f"Error: Could not read from the file {"modified_exa.txt"}.")

def main():
    input_filename = input("example.txt")
    output_filename = input("modified_example.txt")
    read_and_modify_file(input_filename, output_filename)

if __name__ == "__main__":
    main()