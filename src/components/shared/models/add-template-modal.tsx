"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, X } from "lucide-react";
import { ReactNode, useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { createTemplate } from "@/action/templates/create";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FileUploader } from "@/components/ui/file-uploader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { teamplateCreateSchema, TemplateCreateType } from "@/schemas/templates";
import { Subscription } from "@prisma/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface Props {
  trigger: ReactNode;
}

export default function AddTemplatesPage({ trigger }: Props) {
  const [open, setOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isFileUploading, setFileUploading] = useState(false);
  const [pending, startTransition] = useTransition();

  const queryClient = useQueryClient();

  const { data: subscription, isLoading } = useQuery<Subscription[]>({
    queryKey: ["subscription"],
    queryFn: () =>
      fetch("/api/dashboard/subscription").then((res) => res.json()),
  });

  // Initialize the form
  const form = useForm<TemplateCreateType>({
    resolver: zodResolver(teamplateCreateSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: "",
      file: "",
      plan: "",
      publishNow: false,
      banner: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: TemplateCreateType) {
    startTransition(() => {
      createTemplate(values).then((res) => {
        if (!res.success) {
          toast.error(res.message);
          return;
        }

        // handle sucess
        toast.success(res.message);
        setOpen(false);
        form.reset();
        queryClient.invalidateQueries({ queryKey: ["templates"] });
      });
    });
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="w-[500px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-blue-600">
            Add Templates
          </AlertDialogTitle>
          <AlertDialogCancel className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </AlertDialogCancel>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="grid grid-cols-[100px_1fr] items-center gap-4">
                  <FormLabel className="text-right">Title:</FormLabel>
                  <FormControl>
                    <Input placeholder="Template Title" {...field} />
                  </FormControl>
                  <FormMessage className="col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="grid grid-cols-[100px_1fr] items-start gap-4">
                  <FormLabel className="text-right pt-2">
                    Description:
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description............"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="banner"
              render={({ field }) => (
                <FormItem className="grid grid-cols-[100px_1fr] items-center gap-4 overflow-hidden">
                  <FormLabel className="text-right">Banner:</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={field.value}
                      onChange={field.onChange}
                      onUploadStateChange={setIsUploading}
                      id="banner"
                    />
                  </FormControl>
                  <FormMessage className="col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="grid grid-cols-[100px_1fr] items-center gap-4">
                  <FormLabel className="text-right">Category:</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="pro">Pro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="grid grid-cols-[100px_1fr] items-center gap-4">
                  <FormLabel className="text-right">One time price:</FormLabel>
                  <FormControl>
                    <Input placeholder="$##" {...field} />
                  </FormControl>
                  <FormMessage className="col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem className="grid grid-cols-[100px_1fr] items-center gap-4 overflow-hidden">
                  <FormLabel className="text-right">File:</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={field.value}
                      onChange={field.onChange}
                      onUploadStateChange={setFileUploading}
                      id="File"
                    />
                  </FormControl>
                  <FormMessage className="col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem className="grid grid-cols-[100px_1fr] items-center gap-4">
                  <FormLabel className="text-right">Plan:</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger disabled={isLoading}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {subscription?.map(({ id, title }) => (
                        <SelectItem value={id} key={id}>
                          {title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="publishNow"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 ml-[100px]">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Publish Now</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2 pt-4">
              <AlertDialogCancel asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-amber-500 hover:bg-amber-600 text-white border-0"
                >
                  Cancel
                </Button>
              </AlertDialogCancel>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700"
                disabled={isUploading || pending || isFileUploading}
              >
                Create {pending && <Loader2 className="animate-spin ml-2" />}
              </Button>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
