import{ ActionIcon, ColorSchemeProvider, Group, MantineProvider, useMantineColorScheme} from "@mantine/core";
import{ IconSun, IconMoon } from "@tabler/icons"
import { useState } from "react";

export function ThemeToggle(){
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();
    return(
        <Group position="center" mt="xl">
            <ActionIcon 
                onClick = { ()=> toggleColorScheme() }
                size= "xl"
                sx= {(theme) => ({
                    backgroundColor: theme.colorScheme==="dark" ? theme.colors.dark[6]: theme.colors.gray[0],
                    
                    color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6]
                })}>
                    {colorScheme==="dark" ? (
                        <IconSun size={20}/>
                        ) : (
                        <IconMoon size={20} />
                        )}
                    </ActionIcon>
        </Group>
    )
}

export function ThemeButton(props){
    const {Component, pageProps} = props;
    const preferredColorScheme = useMantineColorScheme();

    const [colorScheme, setColorscheme] = useState(props.preferredColorScheme);

    const toggleColorScheme = (value:string) => setColorscheme(value || (colorScheme === "dark" ? "light" : "dark"))

    return(
        <>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme = {toggleColorScheme}
            <MantineProvider theme = {{colorScheme}} withGlobalStyles withNormalizeCSS>
                <Component {pageProps={}}></Component>
            </MantineProvider>
        </ColorSchemeProvider>
        </>
    )

}