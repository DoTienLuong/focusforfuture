#include <iostream>

using namespace std;

int main(){
    int n, sum = 0;
    // cout << "Hi!";
    cout << "Nhap gia tri cua n: ";
    cin >> n;
    for(int i = 0; i <= n; i++){
        sum += i;
        cout << "Tong " << i << " chu so tu 1 den " << i << " la " << sum << endl; 
    }
    return 0;
}