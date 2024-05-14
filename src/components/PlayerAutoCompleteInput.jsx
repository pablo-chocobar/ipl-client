"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


export default function PlayerAutoCompleteInput(props) {
    const [open, setOpen] = React.useState(false)
    const [unique_name, setunique_name] = React.useState("")



    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {unique_name
                        ? props.players.find((player) => player.unique_name === unique_name)?.cname
                        : "Select player..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search player..." />

                    <CommandList>

                        <CommandEmpty>No players found.</CommandEmpty>
                        <CommandGroup>
                            {props.players.map((player , index) => (
                                <CommandItem
                                    key={index}
                                    value={player.unique_name}
                                    onSelect={(currentunique_name) => {
                                        setunique_name(currentunique_name === unique_name ? "" : currentunique_name)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            unique_name === player.unique_name ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {player.cname}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>

                </Command>
            </PopoverContent>
        </Popover>
    )
}
