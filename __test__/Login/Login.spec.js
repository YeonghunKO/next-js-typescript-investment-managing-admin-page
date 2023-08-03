import {
  waitFor,
  fireEvent,
  screen,
  act,
  within,
} from "@testing-library/react";

import user from "@testing-library/user-event";

import { LOGIN_DATA } from "../../data/login";

import { useRouter } from "next/router";
import Login from "../../components/templates/Login";
import { customRender } from "../customRender";

// mock useRouter
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("로그인 페이지 성공케이스 테스트", () => {
  beforeEach(() => {
    customRender(<Login {...LOGIN_DATA} />);
  });
  it("id: sinkyo@gmail.com , password: test123 을 입력후 로그인에 성공한다.", async () => {
    const pushMock = jest.fn();

    useRouter.mockReturnValue({
      query: {},
      // return mock for push method
      push: pushMock,
      // ... add the props or methods you need
    });
    const emailInput = getInputByPlaceHolder("이메일 입력");
    const passwordInput = getInputByPlaceHolder("비밀번호 입력");

    act(() => {
      user.type(emailInput, "sinkyo@gmails.com");
      user.type(passwordInput, "test123");
    });

    user.click(getSubmitButton("login-button"));
    expect(pushMock).toHaveBeenCalledTimes(1);
    screen.debug();
  });
});

function getInputByPlaceHolder(placeholder) {
  return screen.getByPlaceholderText(placeholder);
}

function getSubmitButton(roleName) {
  return screen.getByRole(roleName);
}
