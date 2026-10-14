import {
	TabList,
	TabSlot,
	Tabs,
	TabTrigger,
	type TabTriggerSlotProps,
} from "expo-router/ui";
import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, useColorScheme, View } from "react-native";

import { Colors, Spacing } from "@/constants/theme";

const tabSymbols = {
	home: { ios: "house.fill", android: "home", web: "home" },
	explore: { ios: "safari.fill", android: "explore", web: "explore" },
} as const;

export default function AppTabs() {
	const scheme = useColorScheme();
	const colors = Colors[scheme === "unspecified" ? "light" : scheme];

	return (
		<Tabs>
			<TabSlot style={styles.content} />
			<TabList asChild>
				<View
					style={StyleSheet.flatten([
						styles.tabBar,
						{
							backgroundColor: colors.background,
							borderTopColor: colors.backgroundSelected,
						},
					])}
				>
					<TabTrigger name="home" href="/" asChild>
						<TabButton
							accessibilityLabel="Inicio"
							symbolName={tabSymbols.home}
						/>
					</TabTrigger>
					<TabTrigger name="explore" href="/explore" asChild>
						<TabButton
							accessibilityLabel="Explorar"
							symbolName={tabSymbols.explore}
						/>
					</TabTrigger>
				</View>
			</TabList>
		</Tabs>
	);
}

function TabButton({
	isFocused,
	symbolName,
	...props
}: TabTriggerSlotProps & {
	symbolName: (typeof tabSymbols)[keyof typeof tabSymbols];
}) {
	const scheme = useColorScheme();
	const colors = Colors[scheme === "unspecified" ? "light" : scheme];

	return (
		<Pressable {...props} accessibilityRole="tab" style={styles.tab}>
			{({ pressed }) => (
				<View
					style={[
						styles.iconContainer,
						{
							backgroundColor: isFocused
								? colors.backgroundSelected
								: "transparent",
						},
						pressed && styles.pressed,
					]}
				>
					<SymbolView
						name={symbolName}
						tintColor={isFocused ? colors.text : colors.textSecondary}
						size={24}
					/>
				</View>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
	},
	tabBar: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		flexDirection: "row",
		paddingHorizontal: Spacing.three,
		paddingTop: Spacing.two,
		paddingBottom: Spacing.three,
		borderTopWidth: StyleSheet.hairlineWidth,
	},
	tab: {
		flex: 1,
		alignItems: "center",
	},
	iconContainer: {
		width: 64,
		height: 32,
		borderRadius: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	pressed: {
		opacity: 0.7,
	},
});
