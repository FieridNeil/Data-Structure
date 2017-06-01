// @author: Fierid
// @email: fieridneil@gmail.com
// @date: 5/31/2017

#pragma once

#include "Node.h"

template<class T>
class SLList {
public:

	// Constructor, create an empty list
	SLList();

	// Constructor, create a list of 1 element
	SLList(T);

	// Constructor, create a list from an array
	SLList(T*, int size);

	// Returns the begining (head) of the list
	Node<T>* begin();

	// Inserts an element at the front of the list
	// @param: an element
	void insert_front(T);

	// Inserts an element at the back of the list
	// @param: an element
	void insert_back(T);

	// Inserts an element after an element in the list
	// @param: an element to insert after
	// @param: an item that needs to be added in
	void insert_after(T, T);

	// Searches for an element
	bool search(T);

	// Deletes front element
	void delete_front();

	// Deletes last element
	void delete_back();

	// Deletes an element after a specified element
	void delete_after(T);

	// Shows the list, each item will be in a single line
	void show();

	// Returns the length of the list
	int length();

	// Returns whether the list is empty, that is when len == 0
	bool is_empty();

	// Clears the list
	void clear();

	~SLList<T>() { clear(); }

private:
	Node<T>* head;
	Node<T>* current_node;
	int len;
};

template<class T>
SLList<T>::SLList() {
	head = nullptr;
	current_node = nullptr;
	len = 0;
}

template<class T>
SLList<T>::SLList(T elm) {
	insert_front(elm);
}

template<class T>
SLList<T>::SLList(T* elm, int size) {
	for (int i = 0; i < size; i++) {
		insert_front(elm[i]);
	}
}

template<class T>
Node<T>* SLList<T>::begin() {
	return head;
}

template<class T>
int SLList<T>::length() {
	return len;
}

template<class T>
bool SLList<T>::is_empty() {
	return (len == 0) ? true : false;
}

template<class T>
void SLList<T>::insert_front(T elm) {
	head = new Node<T>(elm, head);
	len++;
}

template<class T>
void SLList<T>::insert_back(T elm) {
	if (head == nullptr) {
		insert_front(elm);
	}
	else {
		current_node = head;
		while (current_node->get_next_node() != nullptr) {
			current_node = current_node->get_next_node();
		}
		Node<T>* node = new Node<T>(elm, nullptr);
		current_node->set_next_node(node);
		len++;
	}
}

template<class T>
void SLList<T>::insert_after(T after, T elm) {
	bool added = false;
	if (head == nullptr) {
		insert_front(elm);
	}
	else {
		current_node = head;
		while (current_node->get_next_node() != nullptr) {
			if (current_node->get_data() == after) {
				Node<T>* node = new Node<T>(elm, current_node->get_next_node());
				current_node->set_next_node(node);
				len++;
				added = true;
				return;
			}
			current_node = current_node->get_next_node();
		}
		if (!added) {
			cout << after << " is not in the list" << endl;
		}
	}
}

template<class T>
bool SLList<T>::search(T elm) {
	if (head == nullptr) {
		return false;
	}
	current_node = head;
	while (current_node != nullptr) {
		if (current_node->get_data() == elm) {
			return true;
		}
		current_node = current_node->get_next_node();
	}
	return false;
}

template<class T>
void SLList<T>::delete_front() {
	if (!is_empty()) {
		Node<T>* node = head;
		head = head->get_next_node();
		delete node;
		len--;
	}
	else {
		cout << "list is empty" << endl;
	}
}

template<class T>
void SLList<T>::delete_back() {
	Node<T>* temp;
	if (!is_empty()) {
		current_node = head;
		temp = current_node->get_next_node();
		while (temp->get_next_node() != nullptr) {
			temp = temp->get_next_node();
			current_node = current_node->get_next_node();
		}
		current_node->set_next_node(nullptr);
		delete temp;
		len--;
	}
	else {
		cout << "list is empty" << endl;
	}
}

template<class T>
void SLList<T>::delete_after(T elm) {
	if (!is_empty()) {
		current_node = head;
		while (current_node != nullptr) {
			if (current_node->get_data() == elm) {
				Node<T>* temp = current_node->get_next_node();
				current_node->set_next_node(temp->get_next_node());
				delete temp;
				len--;
			}
			current_node = current_node->get_next_node();
		}
	}
	else {
		cout << "list is empty" << endl;
	}
}

template<class T>
void SLList<T>::show() {
	current_node = head;
	while (current_node != nullptr) {
		cout << current_node->get_data() << endl;
		current_node = current_node->get_next_node();
	}
}

template<class T>
void SLList<T>::clear() {
	while (len > 0) {
		delete_front();
	}
}

