type APIResponse<dataType> = {
  status: number;
  data: dataType;
  hasError: boolean;
};

type Trainning = {
  id: number;
  formation: string;
  year: string;
};

const userResponse: APIResponse<{
  id: number;
  name: string;
  trainning: Trainning[];
}> = {
  status: 200,
  data: {
    id: 1,
    name: "Kouadio",
    trainning: [{ id: 1, formation: "Udemy", year: "2020" }],
  },
  hasError: false,
};

console.log("API Response goes here", [userResponse].reverse());

/**Multple type or interface
 */

interface User {
  id: number | string;
  name: string;
  isStudent: boolean;
}

const fetchData = async <DataType>(): Promise<DataType> => {
  const response = await fetch("https://www.example.com");
  const dataJson = (await response.json()) as DataType;
  return dataJson;
};

fetchData<User>().then((data) => {
  console.log(data.id, data.name);
});
