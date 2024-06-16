"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { PlusCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { AddUserRequest } from "@/types/user.interface"

import { AddUserSchema } from "@/lib/schemas/user.schema"

import { useAddDentist } from "@/hooks/use-manage-dentist"

import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
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

export function AddUser() {
  const addDentistMutation = useAddDentist()
  const onSubmit = async (data: z.infer<typeof AddUserSchema>) => {
    addDentistMutation.mutate({ ...data, role: "DE" } as AddUserRequest)
    toast.success("User added successfully")
  }
  const form = useForm<z.infer<typeof AddUserSchema>>({
    resolver: zodResolver(AddUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: new Date(),
      phoneNumber: "",
      address: "",
      sex: 0,
      password: "",
    },
  })
  return (
    <div>
      <div className="flex items-center justify-between px-5">
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">
                <PlusCircle size={16} className="mr-2" />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[600px] overflow-hidden bg-transparent p-0">
              <div className="bg-primary py-2 text-center font-semibold text-white">
                Add a new user
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
                        <span className="w-[30%] font-semibold">
                          First Name
                        </span>
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
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem className="flex w-full items-center justify-between gap-10">
                        <span className="w-[30%] font-semibold">
                          Date of Birth
                        </span>
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
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="flex w-full items-center justify-between gap-10">
                        <span className="w-[30%] font-semibold">
                          Phone Number
                        </span>
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
                              onValueChange={(value) =>
                                field.onChange(Number(value))
                              }
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
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="flex w-full items-center justify-between gap-10">
                        <span className="w-[30%] font-semibold">Password</span>
                        <div className="w-[70%]">
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Password"
                              {...field}
                              className="w-full"
                            />
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
          </Dialog>
        </div>
      </div>
    </div>
  )
}
