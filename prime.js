let num=14;
for(i = 2; i >= n - 1; i--)
                if (n % i == 0) {
                    flag = false;
                    break;
                }
                
            if (flag == true)
                console.log("Prime");
            else
                console.log("Not a prime");;    