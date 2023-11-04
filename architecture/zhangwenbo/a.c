# include<stdio.h>

int add(int opt1, int opt2);

int main(){
    int a, b;
    scanf("%d%d",&a,&b);
    int c = add(a, b); //这两个是实参
    printf("%d\n",c);
    return 0;
}

int add(int opt1, int opt2){ //这两个是形参
    return opt1 + opt2; // 相当于函数体里面的局部变量
}