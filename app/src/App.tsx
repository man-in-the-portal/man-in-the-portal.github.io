import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HOME_TITLE } from "./domain/const";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {HOME_TITLE}
      </Typography>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#1A1A1A", color: "white" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#1A1A1A" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {HOME_TITLE}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1A1A1A",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Container component="main" sx={{ mt: 8, mb: 4 }}>
        <Toolbar />
        <Box id="logo" sx={{ mb: 4, textAlign: "center" }}>
          <TerminalDisplay />
        </Box>
        <Box id="abst" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            1. Abstract
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            The proliferation of public hotspots has led to the use of captive
            portals to protect hotspots and ensure their appropriate use.
            Captive portals control external sessions until user authentication
            at the hotspot is complete. One feature of captive portals is that
            these can redirect the authenticated user to an arbitrary website.
            However, cyber-attacks have been reported that exploit captive
            portals and there is an urgent need to improve the protocol of
            captive portals. In this paper, we reveal a critical flaw in the
            captive portal protocol and propose a man-in-the-middle attack that
            exploits the flaw to disable SSL/TLS. We name this attack
            Man-in-the-Portal (MITP). The attack is the first to exploit the
            post-authentication redirection of a captive portal as a starting
            point to disable SSL/TLS. The attacker can easily eavesdrop on and
            tamper with a victim device's communications. Our attack is also
            feasible without requiring any special privileges or tools. To
            demonstrate the effectiveness and practicality, we evaluate the MITP
            attack on five commercially available wireless devices as our
            proof-of-concept, and show that the attack poses significant
            threats. Furthermore, we analyze the root causes of the MITP attack
            and present protocol-level countermeasures to improve the security
            of wireless communications.
          </Typography>
        </Box>
        <Box id="demo" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            2. Demo
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Below is a demonstration of the MITP attack:
          </Typography>
          <Box
            sx={{
              position: "relative",
              paddingBottom: "56.25%", // 16:9 aspect ratio
              height: 0,
              overflow: "hidden",
              maxWidth: "100%",
              mb: 3,
            }}
          >
            <iframe
              src="https://drive.google.com/file/d/1opQV6ZV0S6IsnJ_8Y-0GYHz90TZx2uoU/preview"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="autoplay"
              title="mitp attack demo"
            />
          </Box>
        </Box>
        <Box id="disclosure" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            3. Responsible Disclosure
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            All experimental demonstrations of the proposed method in this work
            were conducted in-house, and we executed no attacks on devices
            outside the laboratory. To avoid direct impact on third parties, we
            have not published the source code of the attack tool implemented
            for our proof-of-concept. Furthermore, to prevent disadvantage to
            third-party organizations, we have anonymized the details of the
            targeted site. However, to demonstrate the fairness of the
            experiments, we have disclosed a minimum of information such as the
            model and operation system of the devices used. We responsibly
            disclosed our findings to a hotspot vendor used in this work in June
            2024. The vendor argued that the findings were not a vulnerability
            of the hotspots, but a flaw in the Internet itself.
          </Typography>
        </Box>
        <Box id="references" sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            4. References
          </Typography>
          <Section
            title="Peer-Reviewed Journal Paper"
            content=""
            bulletPoints={[
              <React.Fragment key="eprint">
                Keiichiro KIMURA, Hiroki KUZUNO, Yoshiaki SHIRAISHI and Masakatu
                MORII. "Man-in-the-Portal: Breaking SSL/TLS Silently Abusing
                Captive Portal" Journal of Information Processing (JIP), 
                Vol.32, pp.1066-1081, doi: 10.2197/ipsjjip.32.1066, (2024).
              </React.Fragment>,
            ]}
          />
        </Box>
      </Container>
    </Box>
  );
}

interface SectionProps {
  title: string;
  content: string;
  bulletPoints?: React.ReactNode[];
}

function Section({ title, content, bulletPoints }: SectionProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ color: "#FFFFFF" }}>
        {title}
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: "#CCCCCC" }}>
        {content}
      </Typography>
      {bulletPoints && (
        <List>
          {bulletPoints.map((point, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={point}
                sx={{ "& .MuiTypography-root": { color: "#CCCCCC" } }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

function TerminalDisplay() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "black",
        color: "#00ff00",
        p: 4,
        borderRadius: 2,
        fontFamily: "monospace",
      }}
    >
      <pre
        style={{
          fontSize: "1rem",
          lineHeight: "1.2",
          overflow: "auto",
          whiteSpace: "pre",
          margin: 0,
        }}
      >
        {`__  __                   _         _   _                ____            _        _ 
|  \\/  | __ _ _ __      (_)_ __   | |_| |__   ___     |  _ \\ ___  _ __| |_ __ _| |
| |\\/| |/ _\` | '_ \\     | | '_ \\  | __| '_ \\ / _ \\    | |_) / _ \\| '__| __/ _\` | |
| |  | | (_| | | | |    | | | | | | |_| | | |  __/    |  __/ (_) | |  | || (_| | |
|_|  |_|\\__,_|_| |_|    |_|_| |_|  \\__|_| |_|\\___|    |_|   \\___/|_|   \\__\\__,_|_|`}
      </pre>

      <Typography
        variant="h4"
        sx={{
          mt: 3,
          mb: 4,
          textAlign: "center",
          color: "#00ff00",
          fontWeight: "bold",
        }}
      >
        Breaking SSL/TLS Silently Abusing Captive Portal
      </Typography>

      <Box
        sx={{
          "& > div": {
            mb: 1.5,
            fontSize: "1.2rem",
            fontFamily: "monospace",
            textAlign: "left",
            pl: 2, // 左側のパディングを追加
          },
        }}
      >
        <div>[*] Initiating attack sequence...</div>
        <div>[*] Target: SSL/TLS protected communications</div>
        <div>[*] Method: Captive Portal redirect abuse</div>
        <div>[*] Status: Undetectable by victim</div>
        <div style={{ color: "#00ff00" }}>[+] Attack ready to deploy</div>
      </Box>
    </Box>
  );
}
