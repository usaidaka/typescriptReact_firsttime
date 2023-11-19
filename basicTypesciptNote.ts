/* Variable */
{
  {
    // -> NAMING VARIABLE <- //
    let variable = "hello";

    variable = "test"; // -> dapat dirubah
    // variable = 1 -> tidak bisa karena variable adalah string

    let age = 18;
    age = 10;
    // age = "eighteen" -> tidak bisa karena age adalah number

    // men-define type dengan cara seperti ini:
    let str: string = "halo";
    let num: number = 12;
    let bool: boolean = true;
    let isNull: null = null;
  }

  {
    // -> ARRAY <- //
    let arrNum: number[] = [1, 2, 3, 4];

    arrNum.push(3); // <- bisa karena type nya sesuai
    // arrNum.push("one") <- error karena beda type

    let arrStr: string[] = ["one", "two", "three", "four"];
    arrStr.push("five"); // <- bisa karena type nya sesuai
    // arrStr.push(3) <- error karena beda type

    let arr: (number | string)[] = [1, "1", "string"];
    arr.push(1);
    arr.push("str");
    // arr.push(true) <- error karena beda type

    let matrix: (number | string)[][] = [
      [1, 2, 3],
      ["one", "two", "three"],
    ];
    matrix.push(["satu", 1, 2, "tiga"]); // bisa karena typenya sesuai
    // matrix.push(1) <- error karena di matrix 1 harus push array dengan type yang sesuai
  }

  {
    // -> OBJECT <- //
    let user = {
      username: "john",
      age: 22,
      isAdmin: false,
    };
    user.username = "Doe"; // bisa karena satu type
    // user.username = 1 <- error karena beda type
    // user.phone = "009123798123" <- akan error karena tidak ada property nya

    let userObj: {
      name: string;
      age: number;
      isAdmin: boolean;
      phone: number;
    };

    /* jika hanya seperti ini akan error karena ada missing type / property maka harus di buat lengkap propertynya 
    userObj = {
        name : "aka",
    } <- akan error karena tidak ada property nya

    kecuali ingin prop lainnya optional. bisa di define dengan menggunakan tanda tanya di depan propertinya:     let userObj : {
    let userObj : {        name : string,
        name : string,        age: number,
        age: number,        isAdmin: boolean,
        isAdmin: boolean,        phone : number,
        phone : number,    }

    */

    userObj = {
      name: "aka",
      age: 22,
      isAdmin: true,
      phone: 1231,
    }; /* jika hanya seperti ini akan error karena ada missing type / property maka harus di buat lengkap propertynya 
     
   userObj = {
        name : "aka",
    } 

    kecuali ingin prop lainnya optional. bisa di define dengan menggunakan tanda tanya di depan propertinya: 
    let userObj : {
        name ?: string,
        age ?: number,
        isAdmin ?: boolean,
        phone ?: number,
    }
    */

    userObj = {
      name: "aka",
      age: 22,
      isAdmin: true,
      phone: 1231,
    };
  }

  {
    /* -> ANY <- */

    let testAny;

    testAny = 1;
    testAny = true;
    testAny = "satu";
    testAny = [];

    const arrAny: any = [
      1,
      2,
      "sesuatu",
      true,
      null,
      { name: "test", age: 23 },
    ];
  }

  {
    /* -> FUNCTIONS <- */
    const sayHi = () => {
      console.log("hi");
    };
    sayHi();

    const multiple = (num: number): number => {
      return num * 2;
    };
    multiple(3);

    // define type didalam arg function kurang effective maka di buatlah Type dan Interface
    let func = (user: { username: string; age: number; phone: string }) => {
      return user;
    };
    console.log(func({ username: "raihan", age: 23, phone: "0923841" }));
  }

  {
    /* -> TYPE ALIASES <-  */
    // penggunakan type biasa
    type UserType = {
      username: string;
      age: number;
      phone: string;
    };

    let func = (user: UserType): UserType => {
      return user;
    };

    // penggunaan type dengan function
    type myFunc = (a: number, b: string) => string;

    let write: myFunc = (num, str) => {
      return num + " times " + str;
    };
    console.log(write(2, "str"));

    type UserType2 = UserType & {
      nickname?: string;
      theme: "dark" | "light";
    };

    const userWithTheme: UserType2 = {
      username: "aka",
      age: 23,
      phone: "0198123",
      theme: "dark",
      nickname: "aka",
    };
  }

  /* -> INTERFACE <- */
  {
    interface IUser {
      username: string;
      email: string;
      age: number;
    }

    interface IEmp extends IUser {
      employeId: number;
    }

    const user: IUser = {
      username: "pegawai",
      email: "pegawai@gmail.com",
      age: 23,
    };

    const emp: IEmp = {
      username: "pegawai",
      email: "pegawai@gmail.com",
      age: 23,
      employeId: 1,
    };

    // membayangkan jika kita melakukan fetch ke sebuah API yang response dari API tersebut kita harus define typenya terlebih dahuku

    interface IAuthor {
      id: number;
      username: string;
    }

    interface ICategory {
      id: number;
      title: string;
    }

    interface IPost {
      id: number;
      title: string;
      desc: string;
      extra: IAuthor[] | ICategory[];
    }
    // lalu bagaimana jika extra suatu saat kita pingin dia lebih generic?

    interface IPostBetter<T, X> {
      id: number;
      title: string;
      desc: string;
      extra: T[];
      extraPlus: X;
    }

    const testIPostBetter: IPostBetter<String | Number, String> = {
      id: 1,
      title: "test aja",
      desc: "test lagi dong",
      extra: ["eh", 1],
      extraPlus: "halo",
    };

    interface IPostEvenBetter<T extends object, X> {
      id: number;
      title: string;
      desc: string;
      extra: T;
      extraPlus: X;
    }

    // pen-define didalam T dapat di refactor sebagaimana di variable testIPostEvenBetter1
    const testIPostEvenBetter: IPostEvenBetter<
      {
        nickname: string;
        age: number;
      },
      string
    > = {
      id: 1,
      title: "test post even better",
      desc: "test juga lah",
      extra: {
        nickname: "bamsoet",
        age: 23,
      },
      extraPlus: "mantap bisa",
    };

    interface ObjIPostEvenBetter {
      nickname: string;
      age: number;
    }
    const testIPostEvenBetter1: IPostEvenBetter<ObjIPostEvenBetter, string> = {
      id: 1,
      title: "test post even better",
      desc: "test juga lah",
      extra: {
        nickname: "bamsoet",
        age: 23,
      },
      extraPlus: "mantap bisa",
    };
  }
}
