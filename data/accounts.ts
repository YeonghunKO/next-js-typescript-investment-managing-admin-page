import { convertFormatDataToLabelValueArray } from "@utils/processFormatData";
import { ROUTER } from "@constants/router";
import {
  ACCOUNT_TABLE_HEADER_DATA,
  BROKERS_FORMAT,
  IS_ACTIVE_FORMAT,
  STATUS_FORMAT,
} from "@constants/formatDataString";

export const ACCOUNTS_DATA = {
  header: {
    title: "투자계좌",
    icons: ["Bell", "Question", "User"],
  },

  sider: [
    { text: "계좌목록", href: ROUTER.ACCOUNTS, icon: "Chart" as const },
    { text: "사용자목록", href: ROUTER.USERS, icon: "UserCircle" as const },
  ],

  accountListBoard: {
    searchInput: {
      type: "text",
      placeholder: "계좌명 검색",
    },
    dropDown: [
      {
        id: 1,
        label: "broker_id" as const,
        data: convertFormatDataToLabelValueArray(BROKERS_FORMAT),
      },
      {
        id: 2,
        label: "is_active" as const,
        data: convertFormatDataToLabelValueArray(IS_ACTIVE_FORMAT),
      },
      {
        id: 3,
        label: "status" as const,
        data: convertFormatDataToLabelValueArray(STATUS_FORMAT),
      },
    ],
    accountTableHeader: ACCOUNT_TABLE_HEADER_DATA,
  },
};
