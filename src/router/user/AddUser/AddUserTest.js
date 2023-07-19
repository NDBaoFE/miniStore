import { ClientFunction, Selector, fixture, test } from "testcafe";

export const addUser = fixture("addUser").page("localhost:5173/user/add");
const toast = Selector(".Toastify__toast-body");
const nameInput = Selector('input[name="userName"]');
const phoneInput = Selector('input[name="userPhone"]');
const addressInput = Selector('input[name="userAddress"]');
const emailInput = Selector('input[name="userEmail"]');
const genderSelector = Selector("#selectGender");
const roleSelector = Selector("#selectRole");
const errorMessage = Selector(".ant-form-item-explain-error");
test("Normal Login testing", async (t) => {
    const setToken = ClientFunction(() => {
        const token =
            "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiIyIiwiaWF0IjoxNjg5NzAyMTcxLCJleHAiOjE2ODk3MDU3NzEsImlkIjoyLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.HZB7NA3Nd1NTM-Sjr7alwu2TEdNokE0ahMSXOvYET9RdWRXYVPi65My6wSNgQ_-gQYx6XeVf_D8P9nTPS8U-pQ";

        localStorage.setItem("Authorization", token);
    });

    // Execute the ClientFunction to set the token in the localStorage
    await setToken();
    await t.navigateTo("/user/add");

    // Test input field for product name
    await t.typeText(nameInput, "Nguyen Duc Bao");
    await t.expect(nameInput.value).eql("Nguyen Duc Bao");

    // Test input field for product price
    await t.typeText(emailInput, "baondforwork@gmail.com");
    await t.expect(emailInput.value).eql("baondforwork@gmail.com");

    // Test input field for product cost
    await t.typeText(phoneInput, "0838631706");
    await t.expect(phoneInput.value).eql("0838631706");

    // Test input field for product code
    await t.typeText(addressInput, "20A Le Lai");
    await t.expect(addressInput.value).eql("20A Le Lai");
    await t.click(genderSelector);
    await t.click(Selector(".ant-select-item-option-content").withText("Male"));
    await t.click(roleSelector);
    await t.click(
        Selector(".ant-select-item-option-content").withText("Employee")
    );
    await t.debug();

    await t.click(Selector("main div").withText("Add User").nth(5));
    await t.click(Selector("span").withText("Confirm"));
    await t.expect(toast.exists).ok();
    await t.expect(toast.innerText).contains("Add User Successfully");
    await t.debug();
});
test("wrong format", async (t) => {
    const setToken = ClientFunction(() => {
        const token =
            "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiIyIiwiaWF0IjoxNjg5NzAyMTcxLCJleHAiOjE2ODk3MDU3NzEsImlkIjoyLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.HZB7NA3Nd1NTM-Sjr7alwu2TEdNokE0ahMSXOvYET9RdWRXYVPi65My6wSNgQ_-gQYx6XeVf_D8P9nTPS8U-pQ";

        localStorage.setItem("Authorization", token);
    });

    // Execute the ClientFunction to set the token in the localStorage
    await setToken();
    await t.navigateTo("/user/add");

    // Test input field for product name
    await t.typeText(nameInput, "Nguyen Duc Bao");
    await t.expect(nameInput.value).eql("Nguyen Duc Bao");

    // Test input field for product price
    await t.typeText(emailInput, "baondforwork@gmail.com");
    await t.expect(emailInput.value).eql("baondforwork@gmail.com");

    // Test input field for product cost
    await t.typeText(phoneInput, "0123");
    await t.expect(phoneInput.value).eql("0123");
    await t.debug();
    await t
        .expect(errorMessage.innerText)
        .eql("Phone Number is not on the right format");
    // Test input field for product code
});
test("Already exist testing", async (t) => {
    const setToken = ClientFunction(() => {
        const token =
            "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiIyIiwiaWF0IjoxNjg5NzAyMTcxLCJleHAiOjE2ODk3MDU3NzEsImlkIjoyLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.HZB7NA3Nd1NTM-Sjr7alwu2TEdNokE0ahMSXOvYET9RdWRXYVPi65My6wSNgQ_-gQYx6XeVf_D8P9nTPS8U-pQ";

        localStorage.setItem("Authorization", token);
    });

    // Execute the ClientFunction to set the token in the localStorage
    await setToken();
    await t.navigateTo("/user/add");

    // Test input field for product name
    await t.typeText(nameInput, "Nguyen Duc Bao");
    await t.expect(nameInput.value).eql("Nguyen Duc Bao");

    // Test input field for product price
    await t.typeText(emailInput, "baondforwork@gmail.com");
    await t.expect(emailInput.value).eql("baondforwork@gmail.com");

    // Test input field for product cost
    await t.typeText(phoneInput, "0838631706");
    await t.expect(phoneInput.value).eql("0838631706");

    // Test input field for product code
    await t.typeText(addressInput, "20A Le Lai");
    await t.expect(addressInput.value).eql("20A Le Lai");
    await t.debug();

    await t.click(Selector("main div").withText("Add User").nth(5));
    await t.click(Selector("span").withText("Confirm"));
    await t.expect(toast.exists).ok();
    await t.expect(toast.innerText).contains("user already exist");
    await t.debug();
});
