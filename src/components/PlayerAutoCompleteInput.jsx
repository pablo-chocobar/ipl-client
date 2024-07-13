"use client"

import { useState, useEffect } from "react"
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
import { getPlayers } from '@/lib/player';

export default function PlayerAutoCompleteInput(props) {
    const [open, setOpen] = useState(false)
    const [unique_name, setunique_name] = useState("")

    const [players, setPlayers] = useState([
        { name: "RG Sharma", unique_name: "RG Sharma", team: "['Mumbai Indians', 'Deccan Chargers']", image: null },
        { name: "SK Raina", unique_name: "SK Raina", team: "['Gujarat Lions', 'Chennai Super Kings']", image: null }
    ]);

    useEffect(() => {
        async function foo() {
            const h = await getPlayers().then(
                (response) => { console.log(response); setPlayers(response) }
            );
        }
        foo()
    }, [])

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
                        ? players.find((player) => player.unique_name === unique_name)?.name
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
                            {players.map((player, index) => (
                                <CommandItem
                                    key={index}
                                    value={player.unique_name}
                                    onSelect={(current_unique_name) => {
                                        console.log(current_unique_name)
                                        props.setSearchQuery(current_unique_name)
                                        setunique_name(current_unique_name === unique_name ? "" : current_unique_name)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            unique_name === player.unique_name ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {player.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>

                </Command>
            </PopoverContent>
        </Popover>
    )
}
