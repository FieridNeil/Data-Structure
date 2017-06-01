// @author: Fierid
// @email: fieridneil@gmail.com
// @date: 5/31/2017

#pragma once
#include "SLList.h"

template<class T>
class Iterator {
public:

	Iterator(SLList<T>*);

	T get();

	void advance();

	bool pass_end();

private:
	Node<T>* location;
	T value;
};

template<class T>
Iterator<T>::Iterator(SLList<T>* list) {
	if (!list->is_empty()) {
		value = list->begin()->get_data();
	}
	location = list->begin();
}

template<class T>
T Iterator<T>::get() {
	if (!pass_end()) {
		return value;
	}
}

template<class T>
void Iterator<T>::advance() {
	if (!pass_end()) {
		location = location->get_next_node();
	}
	if (location != nullptr) {
		value = location->get_data();
	}
}

template<class T>
bool Iterator<T>::pass_end() {
	return (location == nullptr);
}
