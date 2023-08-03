import {
  waitFor,
  fireEvent,
  screen,
  act,
  within,
} from "@testing-library/react";

import { LOGIN_DATA } from "../../data/login";

import { render } from "@testing-library/react";
import Login from "../../components/templates/Login";
import { customRender } from "../customRender";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("로그인 페이지 성공케이스 테스트", () => {
  beforeEach(() => {
    customRender(<Login {...LOGIN_DATA} />);
  });
  it("id: sinkyo@gmail.com , password: test123 을 입력후 로그인에 성공한다.", async () => {
    const input = getInputByPlaceHolder("이메일 입력");
    console.log(input);
  });
});

function getInputByPlaceHolder(placeholder) {
  return screen.getByPlaceholderText(placeholder);
}
