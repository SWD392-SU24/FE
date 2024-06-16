"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { UpdateUserSchema } from "@/lib/schemas/user.schema"

import { useUpdateDentist } from "@/hooks/use-manage-dentist"

import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import { DialogContent } from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type UpdateUserProps = {
  dentist: any
}

export function UpdateUser({ dentist }: UpdateUserProps) {
  const updateDentist = useUpdateDentist()

  const form = useForm<z.infer<typeof UpdateUserSchema>>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      id: dentist.id,
      firstName: dentist.firstName,
      lastName: dentist?.lastName || "",
      email: dentist.email,
      phoneNumber: dentist.phoneNumber || "",
      dateOfBirth: dentist.dateOfBirth
        ? new Date(dentist.dateOfBirth)
        : new Date(),
      address: dentist.address || "",
      sex: dentist.sex,
    },
  })

  const onSubmit = async (data: z.infer<typeof UpdateUserSchema>) => {
    updateDentist.mutate({ ...data, role: "DE" })
    toast.success("User updated successfully")
  }

  return (
    <DialogContent className="w-[600px] overflow-hidden bg-transparent p-0">
      <div className="bg-primary py-2 text-center font-semibold text-white">
        Update User
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5 bg-white px-8 py-6"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex w-full items-center justify-between gap-10">
                <span className="w-[30%] font-semibold">First Name</span>
                <div className="w-[70%]">
                  <FormControl>
                    <Input
                      placeholder="First name"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex w-full items-center justify-between gap-10">
                <span className="w-[30%] font-semibold">Last Name</span>
                <div className="w-[70%]">
                  <FormControl>
                    <Input
                      placeholder="Last name"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex w-full items-center justify-between gap-10">
                <span className="w-[30%] font-semibold">Email</span>
                <div className="w-[70%]">
                  <FormControl>
                    <Input
                      placeholder="Email address"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex w-full items-center justify-between gap-10">
                <span className="w-[30%] font-semibold">Phone Number</span>
                <div className="w-[70%]">
                  <FormControl>
                    <Input
                      placeholder="Phone number"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex w-full items-center justify-between gap-10">
                <span className="w-[30%] font-semibold">Date of Birth</span>
                <div className="w-[70%]">
                  <FormControl>
                    <DatePicker
                      initialDate={field.value}
                      onChange={(date) => field.onChange(date)}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex w-full items-center justify-between gap-10">
                <span className="w-[30%] font-semibold">Address</span>
                <div className="w-[70%]">
                  <FormControl>
                    <Input
                      placeholder="Address"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem className="flex w-full items-center justify-between gap-10">
                <span className="w-[30%] font-semibold">Gender</span>
                <div className="w-[70%]">
                  <FormControl>
                    <RadioGroup
                      value={field.value.toString()}
                      onValueChange={(value) => field.onChange(Number(value))}
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="0" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="flex justify-end space-x-4">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  )
}
