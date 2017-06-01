// @author: Fierid
// @email: fieridneil@gmail.com
// @date: 5/31/2017

#include "SLList.h"
#include "Iterator.h"
#include <iostream>


using namespace std;

int main() {
	int A[10];
	SLList<int> list1;

	for (int i = 0; i < 10; i++) {
		A[i] = i;
	}
	SLList<int> list2(A, 10);
	cout << "length: " << list2.length() << endl;
	list2.show();
	
	cout << "------------------------------------" << endl;
	cout << "list1: " << endl;
	list1.insert_back(11);
	list1.insert_back(12);
	cout << "length: " << list1.length() << endl;
	list1.show();

	cout << "list2: " << endl;
	list2.insert_back(11);
	cout << "length: " << list2.length() << endl;
	list2.insert_after(5, 20);
	cout << "length: " << list2.length() << endl;
	list2.insert_after(30, 50);
	cout << "length: " << list2.length() << endl;
	list2.show();

	cout << "------------------------------------" << endl;

	if (list2.search(3)) {
		cout << "found" << endl;
	}
	else {
		cout << "Not found" << endl;
	}

	if (list2.search(20)) {
		cout << "found" << endl;
	}
	else {
		cout << "not found" << endl;
	}

	cout << "------------------------------------" << endl;

	list2.delete_front();
	cout << "length: " << list2.length() << endl;
	list2.show();
	list2.delete_back();
	cout << "length: " << list2.length() << endl;
	list2.show();
	list2.delete_after(2);
	cout << "length: " << list2.length() << endl;
	list2.show();

	cout << "------------------------------------" << endl;

	for (Iterator<int> it(&list2); !it.pass_end(); it.advance()) {
		cout << it.get() << endl;
	}
	return 0;
}
