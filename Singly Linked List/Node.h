// @author: Fierid Neil
// @email: fieridneil@gmail.com
// @date: 5/31/2017

#pragma once

template<class T>
class Node{
public:

	Node(T item, Node<T>* next);

	Node(T* item, Node<T>* next);

	T get_data();

	T* get_bigdata();

	void set_data(T item);

	void set_data(T* item);

	Node* get_next_node();

	void set_next_node(Node* node);

private:
	T data;
	T* bigdata;
	Node* next_node;
};

template<class T>
Node<T>::Node(T item, Node<T>* next) {
	data = item;
	next_node = next;
}

template<class T>
Node<T>::Node(T* item, Node<T>* next) {
	bigdata = item;
	next_node = next;
}

template<class T>
T Node<T>::get_data() {
	return data;
}

template<class T>
T* Node<T>::get_bigdata() {
	return bigdata;
}

template<class T>
void Node<T>::set_data(T item) {
	data = item;
}

template<class T>
void Node<T>::set_data(T* item) {
	bigdata = item;
}

template<class T>
Node<T>* Node<T>::get_next_node() {
	return next_node;
}

template<class T>
void Node<T>::set_next_node(Node* node) {
	next_node = node;
}
