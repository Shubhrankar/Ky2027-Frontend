export { useContact } from "./useContact";

// Profile hooks
export { useUpdateCollege, type UpdateCollegeData } from "./profile/useProfile";

// Aadhaar hooks
export {
  useAadhaarUpload,
  useAadhaarVerify,
  type AadhaarExtractedData,
} from "./profile/useAadhaar";

// Phone hook (no OTP)
export { useUpdatePhone } from "./usePhone";

// College hooks
export { useCollegeSearch, type College } from "./profile/useColleges";

// Auth hooks
export { useSignIn } from "./profile/useSignIn";
export { useSignOut } from "./profile/useSignOut";

// GraphQL hooks
export { useMyAccount } from "./profile/useMyAccount";
