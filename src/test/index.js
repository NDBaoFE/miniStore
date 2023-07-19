import { fixture, test } from "testcafe";

import { addUser } from "../router/user/AddUser/AddUserTest";
import { updateProduct } from "../router/UpdateProduct/updateProduct";
import { addProduct } from "../router/AddProduct/addProductTest";
import { login } from "../router/login/loginTest";

fixture("Combined Tests")
    .page("localhost:5173") // Add your desired URL or page here
    .beforeEach(async (t) => {
        await login(t);
        await addProduct(t);
        await updateProduct(t);
        await addUser(t);
    });

// Export the fixture
export default fixture;
