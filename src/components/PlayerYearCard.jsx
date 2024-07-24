import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function PlayerStatTabs(props) {
  return (
    <Tabs defaultValue="graph" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="graph" className="hover:bg-content hover:text-primary" >Graph</TabsTrigger>
        <TabsTrigger value="table" className="hover:bg-content hover:text-primary">Table</TabsTrigger>
      </TabsList>
      <TabsContent value="graph">
        <Card className = "border-0 px-0">
          <CardContent className = "px-0">
            {props.Graph}
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="table">
        <Card className = "border-0 px-0">
          <CardContent className = "px-0">
            {props.Table}
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
