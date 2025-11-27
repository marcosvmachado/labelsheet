import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu"
import {    Command,
            CommandDialog,
            CommandEmpty,
            CommandGroup,
            CommandInput,
            CommandItem,
            CommandList,
            CommandSeparator,
            CommandShortcut, } from "./ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"


export const CardEx = () => {
    return (
        <div>
            <Card className="w-100 h-55 bg-black border-2 border-gray-800">
                <CardHeader>
                    <CardTitle className="text-white">Team Members</CardTitle>
                    <CardDescription>Invite your team members to collaborate.</CardDescription>
                    <CardAction></CardAction>
                </CardHeader>
                <CardContent className="text-white h-[40%] flex flex-col justify-center justify-between">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png"/>
                            </Avatar>
                            <div className="ml-5">
                                <CardTitle>Sofia Davis</CardTitle>
                                <CardDescription>m@example.com</CardDescription>
                            </div>
                            </div>
                            <div className="flex items-center">123</div>
                        </div> 
                      
                      <div className="flex justify-between mt-5">
                        <div className="flex items-center">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png"/>
                            </Avatar>
                            <div className="ml-5">
                                <CardTitle>Jackson Lee</CardTitle>
                                <CardDescription>p@example.com</CardDescription>
                            </div>
                            </div>
                            <div className="flex items-center">
                             <Popover>
                                <PopoverTrigger><Button className="bg-black border-2 border-gray-800">Open</Button></PopoverTrigger>
                                <PopoverContent className="bg-black">
                                    <Command className="bg-black">
                                         <CommandInput placeholder="Digite algo"/>
                                         <CommandList>
                                                <CommandItem><CardDescription>Viewer</CardDescription></CommandItem>
                                                <CommandItem><CardDescription>Developer</CardDescription></CommandItem>
                                                <CommandItem><CardDescription>Billing</CardDescription></CommandItem>
                                                <CommandItem><CardDescription>Owner</CardDescription></CommandItem>
                                         </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>                           
                            </div>
                        </div> 
                </CardContent>

            </Card>
        </div>
    )
}


/*
                            

                                
 */