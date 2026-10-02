import { query, types, optional } from "typed-graphqlify";
import { gql } from "@apollo/client/core";

// ═══════════════════════════════════════════════════════════════════
// MY ACCOUNT QUERY
// Returns user profile (Prisma) + account progress (MongoDB)
// ═══════════════════════════════════════════════════════════════════

const myProfileWithAccountProgressQuery = query("GetMyAccount", {
  myAccount: optional({
    profile: {
      id: types.string,
      email: types.string,
      firstName: optional(types.string),
      lastName: optional(types.string),
      slugName: types.string,
      avatarUrl: optional(types.string),
      phone: optional(types.string),
      gender: optional(
        types.constant<"MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY">(
          "MALE",
        ),
      ),
      college: optional(types.string),
      dob: optional(types.string),
      joinedAt: types.string,
      aadhaarNumber: optional(types.string),
      role: optional({
        id: types.string,
        level: types.constant<"SUPER_ADMIN" | "ADMIN" | "USER">("USER"),
      }),
    },
    progress: {
      steps: {
        aadhaarUploaded: types.boolean,
        aadhaarVerified: types.boolean,
        college: types.boolean,
        phone: types.boolean,
      },
      completionPercentage: types.number,
      isProfileComplete: types.boolean,
      accountStatus: types.constant<"ACTIVE" | "SUSPENDED">("ACTIVE"),
    },
  }),
});

const myAccountProgressQuery = query("GetMyAccountProgress", {
  myAccount: optional({
    progress: {
      steps: {
        aadhaarUploaded: types.boolean,
        aadhaarVerified: types.boolean,
        college: types.boolean,
        phone: types.boolean,
      },
      currentStep: types.number,
      completedSteps: types.number,
      totalSteps: types.number,
      isProfileComplete: types.boolean,
    },
  }),
});

// ═══════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════

// Full profile + progress
export type MyAccountResponseType =
  typeof myProfileWithAccountProgressQuery.data;
export type MyAccountData = NonNullable<MyAccountResponseType["myAccount"]>;
export type UserProfile = MyAccountData["profile"];
export type AccountProgress = MyAccountData["progress"];

// Progress only
export type MyAccountProgressResponseType = typeof myAccountProgressQuery.data;
export type MyAccountProgressData = NonNullable<MyAccountProgressResponseType["myAccount"]>;
export type AccountProgressOnly = MyAccountProgressData["progress"];

// ═══════════════════════════════════════════════════════════════════
// QUERIES
// ═══════════════════════════════════════════════════════════════════

export const MyProfileWithAccountProgressQuery = gql`
  ${myProfileWithAccountProgressQuery.toString()}
`;

export const MyAccountProgressQuery = gql`
  ${myAccountProgressQuery.toString()}
`;
