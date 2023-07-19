import { Selector, fixture, test } from "testcafe";

export const login = fixture("Login").page("localhost:5173/login");
const emailInput = Selector('input[name="email"]');
const passwordInput = Selector('input[name="password"]');
const errorMessage = Selector("#login-form_email_help");
const passwordErorrMessage = Selector("#login-form_password_help");
const loginButton = Selector('button[type="submit"]');
const welcomeMessage = Selector(".Toastify__toast-body");
const errorToast = Selector(".Toastify__toast-body");
test("Valid Credentials", async (t) => {
    const emailInput = Selector('input[name="email"]');
    const passwordInput = Selector('input[name="password"]');

    const email = "admin@gmail.com";
    const password = "Hello1234";
    const expectedWelcomeMessage = "Login Successfully";

    await t
        .typeText(emailInput, email)
        .typeText(passwordInput, password)
        .click(loginButton);
    await t.expect(welcomeMessage.exists).ok();
    await t.expect(welcomeMessage.innerText).contains(expectedWelcomeMessage);
});
test("Invalid Input (email)", async (t) => {
    const email = "admingmail.com";
    const password = "Hello1234";

    const expectedWelcomeMessage = "Your input is not a valid Email";

    await t.typeText(emailInput, email).typeText(passwordInput, password);
    await t.debug();
    await t.expect(errorMessage.innerText).contains(expectedWelcomeMessage);
});
test("Invalid Input (password)", async (t) => {
    const email = "admin@gmail.com";
    const password = "hello1234";

    const uppercaseError =
        "Password must contain at least one uppercase letter";

    await t.typeText(emailInput, email).typeText(passwordInput, password);
    await t.debug();
    await t.expect(passwordErorrMessage.innerText).contains(uppercaseError);
});
test("Invalid Input (password) due to not enough letter", async (t) => {
    const email = "admin@gmail.com";
    const password = "Hello1";

    const passwordError = "Password must be at least 8 characters long";

    await t.typeText(emailInput, email).typeText(passwordInput, password);
    await t.debug();
    await t.expect(passwordErorrMessage.innerText).contains(passwordError);
});

test("Invalid Credentials due to incorrect password or email", async (t) => {
    const email = "invalid@example.com";
    const password = "Hello1234";
    const expectedErrorMessage = "log in failed";

    await t
        .typeText(emailInput, email)
        .typeText(passwordInput, password)
        .click(loginButton);

    await t.expect(errorToast.exists).ok();
    await t.expect(errorToast.innerText).contains(expectedErrorMessage);
});
