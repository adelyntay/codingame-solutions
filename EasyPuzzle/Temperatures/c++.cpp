#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

int main()
{
    int n; // the number of temperatures to analyse
    vector <int> temps;

    cin >> n; cin.ignore();
    if (n == 0) {
        cout << "0" << endl;
    } else {
        for (int i = 0; i < n; i++) {
        int t; // a temperature expressed as an integer ranging from -273 to 5526
        cin >> t; cin.ignore();
        temps.push_back(t);
    }

    int closeToZero = temps[0];
        for (int i = 1; i < n; i++) {
            if (abs(temps[i]) < abs(closeToZero) || (abs(temps[i]) == abs(closeToZero) && temps[i] > closeToZero)) {
                closeToZero = temps[i];
            }
        }

    // Write an answer using cout. DON'T FORGET THE "<< endl"
    // To debug: cerr << "Debug messages..." << endl;

    cout << closeToZero << endl;
    }
}