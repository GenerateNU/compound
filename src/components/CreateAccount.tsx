import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  FormLabel,
  InputRightElement,
  IconButton,
  InputGroup,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaEye } from "react-icons/fa";

function FinancialLiteracyForm(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function createUser() {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      localStorage.setItem("email", email); // Store email to localStorage
      console.log("user created");
    } else {
      console.log("user not created");
    }
  }

  async function signUpAndRedirect() {
    const res = await fetch(`/api/users?email=${encodeURIComponent(email)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      console.log("user found, logging in, redirecting to dashboard");
      localStorage.setItem("email", email); // Store email to localStorage
      router.push("/dashboard");
    } else {
      console.log("user not found, creating user and redirecting to sign up ");
      await createUser();
      router.push("/account/confirmation");
    }
  }

  return (
    <Flex direction="row" align="center" justify="center" h="100vh">
      <Box w="100%" gap="0">
        <Flex direction="column">
          <section className="bg-white h-screen">
            <div className="bg-blue-700 flex items-center justify-between gap-5 px-9 py-6 max-md:flex-wrap max-md:px-5">
              <div className="items-stretch flex gap-3.5 my-auto pr-6 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-[0.96] object-contain object-center w-[46px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-gray-100 text-3xl font-extrabold leading-10 self-center grow whitespace-nowrap my-auto">
                  Compound
                </div>
              </div>
            </div>
            <div className="mt-20 flex w-full flex-col mt-10 px-5 max-md:mt-10">
              <h1 className="text-black text-4xl font-extrabold max-w-48 mb-5 mx-auto">
                Your start to financial literacy.
              </h1>
              <p className="text-black font-medium max-w-48 mx-auto text-left">
                Unlock your adventure to coins, confidence, and a wealth of
                knowledge.
              </p>
              <FormControl
                mt="16"
                maxW="30%"
                className="self-center justify-center"
              >
                <FormLabel>Email address</FormLabel>
                <Input
                  className="self-center"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  borderRadius="md"
                  bg="#EEF0F2"
                />
                <FormLabel mt="4">Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    borderRadius="md"
                    bg="#EEF0F2"
                    maxW="100%"
                  />
                  <InputRightElement>
                    <IconButton
                      variant="ghost"
                      colorScheme="teal"
                      icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                      onClick={togglePasswordVisibility}
                      aria-label={""}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <button
                className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-blue-600 self-center w-[408px] max-w-full mt-10 px-5 py-3 rounded-lg max-md:mt-10"
                onClick={() => {
                  signUpAndRedirect();
                }}
              >
                Let's get started!
              </button>
              {/* <Divider
                className="justify-center self-center"
                width="40%"
                mt="5"
                mb="5"
              ></Divider> */}
              <div className="mt-5 mb-5 flex items-stretch gap-3 px-5 max-md:flex-wrap max-md:justify-center justify-center self-center">
                <div className="bg-blue-300 self-center w-[240px] shrink-0 h-0.5 my-auto" />
                <div className="text-blue-700 text-xl font-extrabold leading-7">
                  or
                </div>
                <div className="bg-blue-300 self-center w-[240px] shrink-0 h-0.5 my-auto" />
              </div>
              <Button
                leftIcon={<FcGoogle />}
                onClick={() => alert("coming soon")}
                className="text-zinc-900 text-center text-base leading-6 items-stretch self-center border-[color:var(--Medium-gray,#B2B9C0)] bg-white w-[408px] max-w-full px-4 py-2 border-2 border-solid max-md:mt-10"
              >
                Continue with Google
              </Button>
            </div>
          </section>
        </Flex>
      </Box>
    </Flex>
  );
}

export default FinancialLiteracyForm;
