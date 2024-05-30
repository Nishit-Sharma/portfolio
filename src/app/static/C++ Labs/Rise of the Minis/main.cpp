/**
 * Names: Nishit Sharma, Afnan Ahmed, Brayden Uglione, Christopher Velasquez,
 * Reihan Mudajanto Program Name: Pull up to the Function! Date: 4/18/23 Extra
 * Thing: Using setw
 */

// Imports
#include <iomanip>
#include <iostream>
// Importing math.pow
#include <algorithm>
#include <array>
#include <cstring>
#include <ctype.h>
#include <iterator>
#include <limits>
#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <vector>

using namespace std;

// Vectors
vector<string> operationName;
vector<double> result;

// Exchange Sort algorithm
void exchangeSort(vector<double> &result, vector<string> &operationName,
                  int sortOption) {
  for (int i = 0; i < result.size() - 1; i++) {
    for (int j = i + 1; j < result.size(); j++) {
      // Sorts based on whatever the user chooses
      if (sortOption == 1 && operationName[i] > operationName[j]) {
        swap(operationName[i], operationName[j]);
        swap(result[i], result[j]);
        
      }
      if (sortOption == 2 && result[i] > result[j]) {
        swap(result[i], result[j]);
        swap(operationName[i], operationName[j]);
      }
    }
  }
}

// Function to sort the inventory by a specified attribute
void sortInventory(vector<double> &result, vector<string> &operationName) {
  cout << "\033[2J\033[1;1H";
  int sortOption = 0;
  do {
    cout << "\nSelect an attribute to sort by:" << endl;
    cout << "1. Operator" << endl;
    cout << "2. Result" << endl;
    cin >> sortOption;
  } while (sortOption < 1 || sortOption > 2);

  exchangeSort(result, operationName, sortOption);

  cout << "Calculator sorted by attribute " << sortOption << " using algorithm "
       << "Exchange Sort." << endl;
}

int main() {
  // Variables
  double expo, mod, add, sub, multi, div;
  string restart = "true";
  int choice;

  // Matrices
  double nums[2];

  while (restart == "True" || restart == "true") {

    // Asking and getting what the user wants
    cout << "Type 1 to add numbers" << endl;
    cout << "Type 2 to subtract numbers" << endl;
    cout << "Type 3 to multiply numbers" << endl;
    cout << "Type 4 to divide numbers" << endl;
    cout << "Type 5 to put numbers in exponential form" << endl;
    cout << "Type 6 to put these numbers in mod" << endl;
    cout << "Type 7 to see a list of the outputs and the operator\n\n" << endl;
    cin >> choice;

    // Clearing the screen
    system("clear");

    // Adding
    if (choice == 1) {
      // Getting input
      cout << "Enter a number: ";
      // Error trap
      if (!(cin >> nums[0])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      cout << "Enter another number: ";
      // Error trap
      if (!(cin >> nums[1])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      add = nums[0] + nums[1];
      // Appends values to matrices
      result.push_back(add);
      operationName.push_back("Addition");
      // Prints values
      cout << "\n\nYour two numbers are " << nums[0] << " and " << nums[1]
           << endl;
      cout << "Those two numbers added are " << fixed << setprecision(3) << add
           << endl;
      // Clearing array
      memset(nums, 0, sizeof(nums));
      // Asks user to try again
      cout << "\nWould you like to try again? Answer as true or false" << endl;
      cin >> restart;
    }

    // Subtracting
    else if (choice == 2) {
      // Getting input
      cout << "Enter a number: ";
      // Error trap
      if (!(cin >> nums[0])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      cout << "Enter another number: ";
      // Error trap
      if (!(cin >> nums[1])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      sub = nums[0] - nums[1];
      // Appends values to matrices
      result.push_back(sub);
      operationName.push_back("Subtraction");
      // Prints values
      cout << "\n\nYour two numbers are " << nums[0] << " and " << nums[1]
           << endl;
      cout << "Those two numbers subtracted are " << fixed << setprecision(3)
           << sub << endl;
      // Clearing array
      memset(nums, 0, sizeof(nums));
      // Asks user to try again
      cout << "\nWould you like to try again? Answer as true or false" << endl;
      cin >> restart;
    }

    // Multiplying
    else if (choice == 3) {
      // Getting input
      cout << "Enter a number: ";
      // Error trap
      if (!(cin >> nums[0])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      cout << "Enter another number: ";
      // Error trap
      if (!(cin >> nums[1])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      multi = nums[0] * nums[1];
      // Appends values to matrices
      result.push_back(multi);
      operationName.push_back("Multiplication");
      // Prints values
      cout << "\n\nYour two numbers are " << nums[0] << " and " << nums[1]
           << endl;
      cout << "Those two numbers multiplied are " << fixed << setprecision(3)
           << multi << endl;
      // Clearing array
      memset(nums, 0, sizeof(nums));
      // Asks user to try again
      cout << "\nWould you like to try again? Answer as true or false" << endl;
      cin >> restart;
    }

    // Dividing
    else if (choice == 4) {
      // Getting input
      cout << "Enter a number: ";
      // Error trap
      if (!(cin >> nums[0])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      cout << "Enter another number: ";
      // Error trap
      if (!(cin >> nums[1])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      div = nums[0] / nums[1];
      // Appends values to matrices
      result.push_back(div);
      operationName.push_back("Division");
      // Prints values
      cout << "\n\nYour two numbers are " << nums[0] << " and " << nums[1]
           << endl;
      cout << "Those two numbers divided are " << fixed << setprecision(3)
           << div << endl;
      // Clearing array
      memset(nums, 0, sizeof(nums));
      // Asks user to try again
      cout << "\nWould you like to try again? Answer as true or false" << endl;
      cin >> restart;
    }

    // Exponential form
    else if (choice == 5) {
      // Getting input
      cout << "Enter a number: ";
      // Error trap
      if (!(cin >> nums[0])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      cout << "Enter another number: ";
      // Error trap
      if (!(cin >> nums[1])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      expo = pow(nums[0], nums[1]);
      // Appends values to matrices
      result.push_back(expo);
      operationName.push_back("Exponential Form");
      // Prints values
      cout << "\n\nYour two numbers are " << nums[0] << " and " << nums[1]
           << endl;
      cout << "Those two numbers in exponential form are " << fixed
           << setprecision(3) << expo << endl;
      // Clearing array
      memset(nums, 0, sizeof(nums));
      // Asks user to try again
      cout << "\nWould you like to try again? Answer as true or false" << endl;
      cin >> restart;
    }

    // Mod
    else if (choice == 6) {
      // Getting input
      cout << "Enter a number: ";
      // Error trap
      if (!(cin >> nums[0])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      cout << "Enter another number: ";
      // Error trap
      if (!(cin >> nums[1])) {
        cout << "Invalid input. Please enter a valid number." << endl;
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        continue;
      }
      mod = (int)nums[0] % (int)nums[1];
      // Appends values to matrices
      result.push_back(mod);
      operationName.push_back("Mod");
      // Prints values
      cout << "\n\nYour two numbers are " << nums[0] << " and " << nums[1]
           << endl;
      cout << "Those two numbers mod are " << fixed << setprecision(3) << mod
           << endl;
      // Clearing array
      memset(nums, 0, sizeof(nums));
      // Asks user to try again
      cout << "\nWould you like to try again? Answer as true or false" << endl;
      cin >> restart;
    }

    else if (choice == 7) {
      sortInventory(result, operationName);
      // Prints values
      cout << "Result" << setw(20) << "Operator" << endl;
      cout << setfill('-') << setw(50) << "-" << setfill(' ') << endl;
      for (int i = 0; i < result.size(); i++) {
        cout << fixed << setprecision(3) << result[i] << setw(30)
             << operationName[i] << endl;
      }
      // Clearing array
      memset(nums, 0, sizeof(nums));
      // Asks user to try again
      cout << "\nWould you like to try again? Answer as true or false" << endl;
      cin >> restart;
    }

    // Error trap
    else {
      // Waits for 2 seconds and restarts
      cout << "\nThat is not an option. Try again" << endl;
      sleep(2);
      choice = 10;
    }
  }
  // Prints values
  sortInventory(result, operationName);
  cout << "\n\n";
  cout << setw(10) << "Result" << setw(20) << "Operator" << endl;
  cout << setfill('-') << setw(50) << "-" << setfill(' ') << endl;
  for (int i = 0; i < result.size(); i++) {
    cout << result[i] << setw(25) << operationName[i] << endl;
  }
}