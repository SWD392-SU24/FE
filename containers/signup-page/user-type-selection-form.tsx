import React from "react"

import UserTypeCard from "@/containers/signup-page/user-type-card"
import { FieldValues, UseFormRegister } from "react-hook-form"

type Props = {
  register: UseFormRegister<FieldValues>
  userType: "owner" | "customer"
  setUserType: (userType: "customer" | "owner") => void
}

function UserTypeSelectionForm({ register, setUserType, userType }: Props) {
  return (
    <React.Fragment>
      <h2 className="font-bold text-gravel md:text-4xl">Create an account</h2>
      <p className="text-iridium md:text-sm">
        Tell us about yourself! Are you a customer or an owner?
        <br /> Let’s tailor your DentiCare experience to best suit your needs.
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="customer"
        title="I am a customer"
        text="I am looking for a clinic."
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="I own a clinic"
        text="Setting up account for my clinics."
      />
    </React.Fragment>
  )
}

export default UserTypeSelectionForm
