import { Button } from "@/components/ui/button";
import { DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AuthDialog() {
	const [isOpen, setIsOpen] = useState(false);

	const onRegisterClick = () => {
		console.log("register");
		setIsOpen(false);
	};

	const onLoginClick = () => {
		console.log("login");
		setIsOpen(false);
	};

	const onButtonClick = () => {
		setIsOpen(true);
	};

	return (
		<Dialog open={isOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" onClick={onButtonClick}>
					Login
				</Button>
			</DialogTrigger>
			<DialogContent
				className="sm:max-w-[500px]"
				onInteractOutside={() => setIsOpen(false)}
			>
				<Tabs className="w-full" defaultValue="register">
					<TabsList className="grid w-[97%] grid-cols-2">
						<TabsTrigger value="register">Register</TabsTrigger>
						<TabsTrigger value="login">Login</TabsTrigger>
					</TabsList>
					<TabsContent value="register">
						<div className="space-y-4 py-6">
							<div className="grid gap-2">
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									placeholder="Enter your name"
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									placeholder="Enter your email"
									type="email"
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									placeholder="Enter a password"
									type="password"
								/>
							</div>
							<Button
								className="w-full"
								onClick={onRegisterClick}
							>
								Register
							</Button>
						</div>
					</TabsContent>
					<TabsContent value="login">
						<div className="space-y-4 py-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									placeholder="Enter your email"
									type="email"
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									placeholder="Enter your password"
									type="password"
								/>
							</div>
							<Button className="w-full" onClick={onLoginClick}>
								Login
							</Button>
						</div>
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	);
}
