import { ClientFunction, Selector, fixture, test } from "testcafe";

export const updateProduct = fixture("UpdateProduct").page(
    "localhost:5173/product/new"
);
const toast = Selector(".Toastify__toast-body");
const nameInput = Selector('input[name="productName"]');

const errorMessage = Selector(".ant-form-item-explain-error");
test("Validate Input(requried field)", async (t) => {
    const setToken = ClientFunction(() => {
        const token =
            "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiIyIiwiaWF0IjoxNjg5Njg5NTU2LCJleHAiOjE2ODk2OTMxNTYsImlkIjoyLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.MeEoum4Jog6YCny4lI-REjtLaqYcFGoWyr3Wx3CNbi9k0cjlGvJu2xj2DvK0QAMJB0fOQwKW38Tk1ZkmeBCAjw";

        localStorage.setItem("Authorization", token);
    });

    // Execute the ClientFunction to set the token in the localStorage
    await setToken();
    await t.navigateTo("/product/view/22");
    await t.debug();
    await t
        .click(Selector("main div").withText("Update Product").nth(4))
        .click(Selector("span").withText("Confirm"));

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
test("Edit Product", async (t) => {
    const setToken = ClientFunction(() => {
        const token =
            "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiIyIiwiaWF0IjoxNjg5Njg5NTU2LCJleHAiOjE2ODk2OTMxNTYsImlkIjoyLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.MeEoum4Jog6YCny4lI-REjtLaqYcFGoWyr3Wx3CNbi9k0cjlGvJu2xj2DvK0QAMJB0fOQwKW38Tk1ZkmeBCAjw";

        localStorage.setItem("Authorization", token);
    });

    // Execute the ClientFunction to set the token in the localStorage
    await setToken();
    await t.navigateTo("product/view/22");

    // Clear the input value
    await t.selectText(nameInput).pressKey("delete");

    await t.typeText(nameInput, "Cà Rốt");
    await t.expect(nameInput.value).eql("Cà Rốt");

    await t.click(Selector("main div").withText("Update Product").nth(4));
    await t.click(Selector("span").withText("Confirm"));

    await t.expect(toast.exists).ok();
    await t.expect(toast.innerText).contains("Update product Successfully");
    await t.debug();
});
