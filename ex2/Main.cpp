#include <iostream>
using namespace std;
void printRow(int numOfStars,int width)
{
	int temp = (width - numOfStars) / 2;
	for (int i = 0; i < temp; i++)
	{
		cout << " ";
	}
	for (int i = 0; i < numOfStars; i++)
	{
		cout << "*";
	}
	for (int i = 0; i < temp; i++)
	{
		cout << " ";
	}
	cout << endl;
}
int main()
{
	int choice,height,width;
	cout << "press 1 to rectangle" << endl << "press 2 to triangle" << endl << "press 3 to exit\n";
	cin >> choice;
	while (choice == 1 || choice == 2)
	{
		if (choice == 1)
		{
			cout << "enter the height and the width of the rectangle\n";
			cin >> height >> width;
			if ((width + 5 <= height) || (height + 5 <= width))
			{
				cout << (width * height) << endl;
			}
			else
				cout << (width * 2 + height * 2) << endl;
		}
		else
		{
			cout << "enter the height and the width of the triangle\n";
			cin >> height >> width;
			cout << "enter 1 to get the perimeter of the triangle" << endl << "enter 2 to print the triangle" << endl;
			cin >> choice;
			if (choice == 1)
			{
				cout << (height * width) / 2 << endl;
			}
			else
			{
				if (width % 2 == 0 || height * 2 < width)
				{
					cout << "ERROR! it's unable to print the triangle\n";
				}
				else
				{
					int numOfGroups = 0;
					int rest;
					int rowsInFirstGroup = 0;
					int tempWidth = width;
					while (tempWidth > 3)
					{
						tempWidth -= 2;
						numOfGroups++;
					}

					rest = (height - 2) % numOfGroups;
					int numOfStars = 1;
					printRow(numOfStars, width);
					bool isFirstGroup = true;
					for (int i = 1; i <= numOfGroups; ++i)
					{
						numOfStars += 2;
						if (isFirstGroup == true)
						{
							for (int j = 1; j <= ((height - 2) / numOfGroups)+rest; ++j)
							{
								printRow(numOfStars, width);
							}
							isFirstGroup = false;
						}
						else
						{
							for (int j = 1; j <= (height - 2) / numOfGroups; ++j)
							{
								printRow(numOfStars, width);
							}
						}
					}
					printRow(width, width);
				}
			}
		}
		cout << "press 1 to rectangle" << endl << "press 2 to triangle" << endl << "press 3 to exit\n";
		cin >> choice;
	}
	return 0;
}
