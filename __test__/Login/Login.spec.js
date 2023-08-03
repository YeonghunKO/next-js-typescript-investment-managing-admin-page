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
  const pushMock = jest.fn();

  beforeEach(() => {
    customRender(<Login {...LOGIN_DATA} />);

    useRouter.mockReturnValue({
      query: {},
      // return mock for push method
      push: pushMock,
      // ... add the props or methods you need
    });

    pushMock.mockClear();
  });

  it.only("id, password 올바르게 입력후 성공케이스", async () => {
    const emailInput = getInputByPlaceHolder("이메일 입력");
    const passwordInput = getInputByPlaceHolder("비밀번호 입력");

    act(() => {
      user.type(emailInput, "sinkyo@gmail.com");
      user.type(passwordInput, "test123");
    });

    user.click(await findByElementByRole("login-button"));

    expect(pushMock).toHaveBeenCalledTimes(1);

    // 올바른 사용자이므로 에러 버튼이 나타나지 않음, queryBy api를 사용해야 element가 없을경우 null이 리턴되어 테스트 가능

    // https://testing-library.com/docs/react-testing-library/cheatsheet/#queries 참고!

    // 만약 getBy / findBy api를 쓰면 찾을 수 없다는 에러가 나타나서 테스트 도중 break될것이다.

    const errorButton = getQueryByRole("error-button");

    expect(errorButton).not.toBeInTheDocument();

    // screen.debug();
  });

  it("id, password 올바르지 않게 입력후 실패케이스", async () => {
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

function getQueryByRole(roleName) {
  return screen.queryByRole(roleName);
}
