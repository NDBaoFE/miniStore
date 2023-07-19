import { ClientFunction, Selector, fixture, test } from "testcafe";

export const addProduct = fixture("Add Product").page(
    "localhost:5173/product/new"
);
const toast = Selector(".Toastify__toast-body");
const loginButton = Selector('button[type="submit"]');
const nameInput = Selector('input[name="productName"]');
const priceInput = Selector('input[name="productPrice"]');
const CostInput = Selector('input[name="productCost"]');
const CodeInput = Selector('input[name="productCode"]');
const QuantityInput = Selector('input[name="productQuantity"]');
const errorMessage = Selector(".ant-form-item-explain-error");

test("Interface testing with authorization", async (t) => {
    const setToken = ClientFunction(() => {
        localStorage.setItem("token", "abc");
    });
    const errorMess = "PLease Login First";
    // Execute the ClientFunction to set the token in the localStorage
    await setToken();
    await t.navigateTo("/product/new");
    await t.expect(toast.exists).ok();
    await t.expect(toast.innerText).contains(errorMess);
});
test("Authorzation successfully and input", async (t) => {
    const emailInput = Selector('input[name="email"]');
    const passwordInput = Selector('input[name="password"]');

    const email = "admin@gmail.com";
    const password = "Hello1234";

    await t
        .typeText(emailInput, email)
        .typeText(passwordInput, password)
        .click(loginButton);
    await t.expect(toast.exists).ok();
    await t.navigateTo("/product/new");

    // Test input field for product name
    await t.typeText(nameInput, "Test Product Name");
    await t.expect(nameInput.value).eql("Test Product Name");

    // Test input field for product price
    await t.typeText(priceInput, "10.99");
    await t.expect(priceInput.value).eql("10.99");

    // Test input field for product cost
    await t.typeText(CostInput, "5.99");
    await t.expect(CostInput.value).eql("5.99");

    // Test input field for product code
    await t.typeText(CodeInput, "ABC123");
    await t.expect(CodeInput.value).eql("ABC123");

    // Test input field for product quantity
    await t.typeText(QuantityInput, "100");
    await t.expect(QuantityInput.value).eql("100");
});
test("Validate Input(requried field)", async (t) => {
    const setToken = ClientFunction(() => {
        const token =
            "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiIyIiwiaWF0IjoxNjg5Njg1Nzk1LCJleHAiOjE2ODk2ODkzOTUsImlkIjoyLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.JCShq26LX2tvvozMw9i1MAfAp50Dm2Ic9A2Oy4TxEuV-RfOVhdvcEQbqg4C1dKzj8nDuW5LC2E-_gBcR19Y2QA";

        localStorage.setItem("Authorization", token);
    });

    // Execute the ClientFunction to set the token in the localStorage
    await setToken();
    await t
        .navigateTo("/product/new")
        .click(loginButton)
        .click(Selector("span").withText("Confirm"))
        .click(Selector("main div").withText("Nước").nth(7))
        .click(
            Selector(".ant-select-item-option-content").withText("Rau củ quả")
        );
    await t.debug();
    await t.expect(errorMessage.exists).ok();
    const errorExplanations = Selector(".ant-form-item-explain-error");
    const nameError = errorExplanations.nth(0);

    const priceError1 = errorExplanations.nth(2);
    const costError = errorExplanations.nth(3);
    const costError1 = errorExplanations.nth(4);
    const codeError = errorExplanations.nth(5);

    await t.expect(nameError.exists).ok();
    await t
        .expect(nameError.innerText)
        .eql("Product Name code cannot be empty");

    // await t.expect(priceError.exists).ok();
    // await t.expect(priceError.innerText).eql("Price can  not be empty");

    await t.expect(priceError1.exists).ok();
    await t.expect(priceError1.innerText).eql("Price must be larger than 0");

    await t.expect(costError.exists).ok();
    await t.expect(costError.innerText).eql("Cost can not be empty!!");

    await t.expect(costError1.exists).ok();
    await t.expect(costError1.innerText).eql("Cost must be larger than 0");

    await t.expect(codeError.exists).ok();
    await t.expect(codeError.innerText).eql("Product code cannot be empty");
});
test("Validate Input(requried field)", async (t) => {
    const setToken = ClientFunction(() => {
        const token =
            "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiIyIiwiaWF0IjoxNjg5Njg1Nzk1LCJleHAiOjE2ODk2ODkzOTUsImlkIjoyLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.JCShq26LX2tvvozMw9i1MAfAp50Dm2Ic9A2Oy4TxEuV-RfOVhdvcEQbqg4C1dKzj8nDuW5LC2E-_gBcR19Y2QA";

        localStorage.setItem("Authorization", token);
    });

    // Execute the ClientFunction to set the token in the localStorage
    await setToken();
    await t
        .navigateTo("/product/new")
        .click(Selector("main div").withText("Nước").nth(7))
        .click(
            Selector(".ant-select-item-option-content").withText("Rau củ quả")
        );

    //Test input field for product name
    await t.typeText(nameInput, "Cà Rốt");
    await t.expect(nameInput.value).eql("Cà Rốt");

    // Test input field for product price
    await t.typeText(priceInput, "20000");
    await t.expect(priceInput.value).eql("20000");

    // Test input field for product cost
    await t.typeText(CostInput, "10000");
    await t.expect(CostInput.value).eql("10000");

    // Test input field for product code
    await t.typeText(CodeInput, "12343123");
    await t.expect(CodeInput.value).eql("12343123");

    // Test input field for product quantity
    await t.typeText(QuantityInput, "100");
    await t.expect(QuantityInput.value).eql("100");

    await t.click(loginButton);
    await t.click(Selector("span").withText("Confirm"));

    await t.expect(toast.exists).ok();
    await t.expect(toast.innerText).contains("Add product Successfully");
    await t.debug();
});
