// @author: Fierid Neil
// @email: fieridneil@gmail.com
// @date: 6/1/2017

#pragma once

template<class T>
class DynamicArray {

public:

	DynamicArray();

	DynamicArray(T elm);

	DynamicArray(T* elm, int size);

	void insert(T elm);

	bool search(T elm);

	void remove();

	int length();

	bool is_empty();

	void clear();

	void show();

	void resize();

	~DynamicArray<T>() { clear(); }

	T operator[](int index);

private:
	T* Darray;
	int len;
	int capacity = 50;
};

template<class T>
DynamicArray<T>::DynamicArray() {
	Darray = new T[capacity];
}

template<class T>
DynamicArray<T>::DynamicArray(T elm) {
	Darray = new T[capacity];
	Darray[0] = elm;
	len++;
}

template<class T>
DynamicArray<T>::DynamicArray(T* elm, int size) {
	Darray = new T[capacity];
	for (int i = 0; i < size; i++) {
		if (len == capacity) {
			resize();
		}
		Darray[i] = elm[i];
		len++;
	}

}

template<class T>
void DynamicArray<T>::insert(T elm) {
	if (len == capacity) {
		resize();
	}
	Darray[len] = elm;
	len++;
}

template<class T>
bool DynamicArray<T>::search(T elm) {
	for (int i = 0; i < len; i++) {
		if (Darray[i] == elm) {
			return true;
		}
	}
	return false;
}

template<class T>
void DynamicArray<T>::remove() {
	len--;
}

template<class T>
int DynamicArray<T>::length() {
	return len;
}

template<class T>
bool DynamicArray<T>::is_empty() {
	return (len == 0) ? true : false;
}

template<class T>
void DynamicArray<T>::clear() {
	delete[] Darray;
	len = 0;
}

template<class T>
void DynamicArray<T>::show() {
	for (int i = 0; i < len; i++) {
		cout << Darray[i] << endl;
	}
}

template<class T>
void DynamicArray<T>::resize() {
	capacity *= 2;
	T* temp = new T[capacity];
	for (int i = 0; i < len; i++) {
		temp[i] = Darray[i];
	}
	Darray = new T[capacity];
	for (int i = 0; i < len; i++) {
		Darray[i] = temp[i];
	}
	delete[] temp;
}

template<class T>
inline T DynamicArray<T>::operator[](int index)
{
	if (index > len - 1) {
		std::cout << "Out of bound ";
		return 0;
	}
	else {
		return Darray[index];
	}
}
