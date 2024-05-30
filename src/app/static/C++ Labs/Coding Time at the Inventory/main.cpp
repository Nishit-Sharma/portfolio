/**
 * Name: Nishit Sharma
 * Program Name: (EC) Coding Time at the Inventory!
 * Date: 3/20
 * Extra Thing:
 */

#include <cstdlib>
#include <iomanip>
#include <iostream>
#include <limits>
#include <stdlib.h>
#include <vector>

using namespace std;

struct Item {
  int id = 0;
  string name = "";
  string donor = "";
  bool donated;
  string color = "";
  string size = "";
  float weight = 0;
  string material = "";
};

vector<Item> items;

bool checkWeight(string weight) {
  // Check if the input contains only digits
  bool isDigit = true;
  for (char c : weight) {
    if (!isdigit(c)) {
      isDigit = false;
      break;
    }
  }
  return isDigit;
}

void add_item() {
  Item item;
  string donatedInput;
  bool validInput; // Flag to indicate whether the user input is valid

  // Prompt the user for the necessary information about the new item
  validInput = true; // Assume the input is valid
  cout << "Enter item name: ";
  cin.ignore(numeric_limits<streamsize>::max(), '\n');
  getline(cin, item.name);

  cout << "Enter the color: ";
  cin >> item.color;

  cout << "Enter the size: ";
  cin >> item.size;

  cout << "Enter the weight (Grams): ";
  string weightInput;
  cin.ignore(numeric_limits<streamsize>::max(), '\n');
  getline(cin, weightInput);

  while (!checkWeight(weightInput)) {
    // Prompt the user to enter a valid number
    validInput = false;
    cout << "Invalid input. Please enter a number.\n";
    getline(cin, weightInput);
  }

  item.weight = stof(weightInput);

  cout << "Enter the material: ";
  cin >> item.material;

  cout << "Was the item donated (True or False): ";
  cin >> donatedInput;
  if (donatedInput == "True" || donatedInput == "true") {
    item.donated = true;
  } else if (donatedInput == "False" || donatedInput == "false") {
    item.donated = false;
  } else {
    validInput = false;
    cout << "Invalid input. Please enter True or False.\n";
    cin.clear();
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
  }

  if (item.donated == true) {
    cout << "Enter donor name: ";
    cin >> item.donor;
    cin.ignore();
  }

  bool id_exists;
  do {
    id_exists = false;
    item.id = rand() % 1000000; // Generate a random 6-digit number for the ID
    // Checks if the ID already exists
    for (const auto &existing_item : items) {
      if (existing_item.id == item.id) {
        id_exists = true;
        break;
      }
    }
  } while (id_exists);

  // Add the new item to the vector
  items.push_back(item);
  cout << "Item added to inventory with ID " << item.id << endl;
}

void remove_item() {
  // cout << "\033[2J\033[1;1H";
  string input = "";
  // Asks the user to input the item they want to remove
  cout << "Enter the name or ID number of the item to remove: ";
  cin >> input;
  bool item_found = false;
  // Loop that starts at the beginning of the items vector and continues until
  // it reaches the edn
  for (auto it = items.begin(); it != items.end(); it++) {
    // The it variable is a pointer so you need to use an arrow instead of the .
    // to access the structure. Assinging iterator to items.being() makes it a
    // pointer
    if (it->name == input || to_string(it->id) == input) {
      items.erase(it);
      item_found = true;
      break;
    }
  }
  if (!item_found) {
    cout << "Item not found." << endl;
  }
}

// Helper function for Quick Sort
int partition(vector<Item> &items, int low, int high, int sortOption) {
  Item pivot = items[high];
  int i = low - 1;
  for (int j = low; j < high; j++) {
    if (sortOption == 1 && items[j].id <= pivot.id ||
        sortOption == 2 && items[j].name <= pivot.name ||
        sortOption == 3 && items[j].donor <= pivot.donor ||
        sortOption == 4 && items[j].color <= pivot.color ||
        sortOption == 5 && items[j].size <= pivot.size ||
        sortOption == 6 && items[j].weight <= pivot.weight ||
        sortOption == 7 && items[j].material <= pivot.material) {
      i++;
      swap(items[i], items[j]);
    }
  }
  swap(items[i + 1], items[high]);
  return i + 1;
}

// Quick Sort algorithm
void quickSort(vector<Item> &items, int low, int high, int sortOption) {
  if (low < high) {
    int pi = partition(items, low, high, sortOption);
    quickSort(items, low, pi - 1, sortOption);
    quickSort(items, pi + 1, high, sortOption);
  }
}

// Exchange Sort algorithm
void exchangeSort(vector<Item> &items, int sortOption) {
  for (int i = 0; i < items.size() - 1; i++) {
    for (int j = i + 1; j < items.size(); j++) {
      // Sorts based on whatever the user chooses
      if (sortOption == 1 && items[i].id > items[j].id ||
          sortOption == 2 && items[i].name > items[j].name ||
          sortOption == 3 && items[i].donor > items[j].donor ||
          sortOption == 4 && items[i].color > items[j].color ||
          sortOption == 5 && items[i].size > items[j].size ||
          sortOption == 6 && items[i].weight > items[j].weight ||
          sortOption == 7 && items[i].material > items[j].material) {
        swap(items[i], items[j]);
      }
    }
  }
}

// Function to sort the inventory by a specified attribute
void sortInventory(vector<Item> &items) {
  // Clears the screen and prompts the user to choose an attribute to sort by
  // cout << "\033[2J\033[1;1H";
  int sortOption = 0;
  do {
    cout << "\nSelect an attribute to sort by:" << endl;
    cout << "1. ID number" << endl;
    cout << "2. Name" << endl;
    cout << "3. Donor name" << endl;
    cout << "4. Color" << endl;
    cout << "5. Size" << endl;
    cout << "6. Weight" << endl;
    cout << "7. Material" << endl;
    cin >> sortOption;
  } while (sortOption < 1 || sortOption > 7);

  int sortAlgorithm;
  do {
    // Asks the user to choose a sorting algorithm
    cout << "Select a sorting algorithm:" << endl;
    cout << "1. Quick Sort" << endl;
    cout << "2. Exchange Sort" << endl;
    cin >> sortAlgorithm;
  } while (sortAlgorithm < 1 || sortAlgorithm > 2);

  // Calls the algorithms
  switch (sortAlgorithm) {
  case 1: // Quick Sort
    quickSort(items, 0, items.size() - 1, sortOption);
    break;
  case 2: // Exchange Sort
    exchangeSort(items, sortOption);
    break;
  default:
    break;
  }

  cout << "Inventory sorted by attribute " << sortOption << " using algorithm "
       << sortAlgorithm << "." << endl;
}

void displayInventory(vector<Item> &items) {
  // Uses setw to format a chart
  cout << setw(10) << "ID" << setw(20) << "Name" << setw(15) << "Color"
       << setw(15) << "Size" << setw(15) << "Weight (Grams)" << setw(15)
       << "Material" << setw(15) << "Donated" << setw(15) << "Donor" << endl;
  cout << setfill('-') << setw(130) << "-" << setfill(' ') << endl;
  for (int i = 0; i < items.size(); i++) {
    cout << setw(10) << items[i].id << setw(20) << items[i].name << setw(15)
         << items[i].color << setw(15) << items[i].size << setw(15)
         << items[i].weight << setw(15) << items[i].material << setw(15)
         << items[i].donated << setw(15) << items[i].donor << endl;
  }
  cout << setfill('-') << setw(130) << "-" << setfill(' ') << endl;
}

void menu(vector<Item> &items) {
  // Prints a menu that allows the user to choose what they want
  int choice = 0;
  do {
    cout << "\nGoodwill Inventory Management System\n";
    cout << "---------------------------------------\n";
    cout << "1. Add item\n";
    cout << "2. Remove item\n";
    cout << "3. Display inventory\n";
    cout << "4. Sort items\n";
    cout << "5. Exit\n";
    cout << "Enter your choice: ";
    cin >> choice;
    switch (choice) {
    case 1:
      add_item();
      break;
    case 2:
      remove_item();
      break;
    case 3:
      displayInventory(items);
      break;
    case 4:
      sortInventory(items);
      break;
    case 5:
      cout << "Exiting program...\n";
      break;
    default:
      cout << "Invalid choice. Please try again.\n";
      break;
    }
  } while (choice != 5);
}

int main() { menu(items); }
