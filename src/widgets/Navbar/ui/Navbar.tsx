import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <nav className={classNames(styles.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'}>
                    Main
                </AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>
                    About
                </AppLink>
            </div>
        </nav>
    );
};