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

import "@testing-library/jest-dom";

// mock useRouter
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("로그인 페이지 테스트 - id: sinkyo@gmail.com , password: test123 로만 로그인 가능", () => {
  beforeEach(() => {
    customRender(<Login {...LOGIN_DATA} />);
  });

  it("id, password 올바르게 입력후 성공케이스", async () => {
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

    user.click(await findByElementByRole("login-button"));

    expect(pushMock).toHaveBeenCalledTimes(1);

    // 올바른 사용자이므로 에러 버튼이 나타나지 않음
    const errorButton = await findByElementByRole("error-button");

    expect(errorButton).not.toBeEmptyDOMElement();

    // screen.debug();
  });

  it("id, password 올바르지 않게 입력후 실패케이스", async () => {
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
      user.type(emailInput, "sinkyo2@gmails.com");
      user.type(passwordInput, "test123");
    });

    user.click(await findByElementByRole("login-button"));

    expect(pushMock).toHaveBeenCalledTimes(1);

    // 올바르지 않은 사용자이므로 아래 에러가 나타남
    const errorTextElement = await findElementByText(
      "등록되지 않은 사용자입니다."
    );
    expect(errorTextElement).toBeInTheDocument();
    // screen.debug();
  });
});

function getInputByPlaceHolder(placeholder) {
  return screen.getByPlaceholderText(placeholder);
}

function findByElementByRole(roleName) {
  return screen.findByRole(roleName);
}

function findElementByText(text) {
  return screen.findByText(text);
}
