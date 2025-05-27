import { CreateAccount } from '../pom/AccountPage/contractAccountPage/CreateAccountContract'
import { AccountPage } from '../pom/AccountPage/pageAccount/CreateAccountPage'
import { CartPage } from '../pom/CartPage/pageCart/CreateCartPage'
import { HomePage } from '../pom/HomePage/pageHome/CreateHomePage'
import { CreateLogin } from '../pom/LoginSignUpPage/contractLogin/CreateLoginContract'
import { CreateSignUp } from '../pom/LoginSignUpPage/contractSignUp/CreateSignUpContract'
import { LoginSignUpPage } from '../pom/LoginSignUpPage/pageLoginSignUp/CreateLoginSignUpPage'
import { ProductPage } from '../pom/ProductPage/pageProduct/CreateProductPage'

export {
    LoginSignUpPage,
    CreateLogin,
    CreateSignUp,
    CreateAccount,
    AccountPage,
    HomePage,
    ProductPage,
    CartPage
}

export type PageFixtures = {
    loginPage: LoginSignUpPage
    contractLogin: CreateLogin
    signUpPage: LoginSignUpPage
    contractSignUp: CreateSignUp
    contractAccount: CreateAccount
    createAccountPage: AccountPage
    homePage: HomePage
    productPage: ProductPage
    cartPage: CartPage
}
