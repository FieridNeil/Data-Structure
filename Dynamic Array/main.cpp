#include "DynamicArray.h"
#include <iostream>

using namespace std;

int main() {

	DynamicArray<int> DA;

	DynamicArray<int> DA1(10);

	int arr[100];

	for (int i = 0; i < 100; i++) {
		arr[i] = i;
	}

	DynamicArray<int> DA2(arr, 100);

	cout << "DA: " << endl;
	DA.insert(1);
	DA.insert(2);
	DA.insert(19);
	DA.show();
	DA.remove();
	DA.show();
	cout << "Length: " << DA.length() << endl;
	(DA.search(2)) ? cout << "found" << endl : cout << "not found" << endl;

	cout << "\n\nDA1\n";
	cout << DA1[0] << endl;

	cout << "\n\nDA2" << endl;
	DA2.show();

	return 0;
}
