export default function Divider({ icon, char='❖', size, split, icons, classes, colors }) {
    if (!size) size = ''; 
    if (!classes) classes = ''; 
    if (!colors) colors = {
        ruler: 'var(--light)', 
        icon: 'var(--spark)'
    }

    if (!split) {
        return (
            <div className={`d-flex justify-content-center ${classes}`}>
                <hr style={{ color: colors.ruler, flexGrow: 1 }}></hr>
                <i className={`fa fa-${icon} fs-${size} align-self-center mx-2 spark`} style={{ color: colors.icon, height: 'fit-content' }}>{icon ? '': char}</i>
                <hr style={{ color: colors.ruler, flexGrow: 1 }}></hr>
            </div>
        )
    }
    else {
        return (
            <div className={`d-flex justify-content-center ${classes}`}>
                <i className={`fa fa-${icons[0]} fs-${size} align-self-center mx-2 spark`} style={{ color: colors.icon, height: 'fit-content' }}></i>
                <hr style={{ color: colors.ruler, flexGrow: 1 }}></hr>
                <i className={`fa fa-${icons[1]} fs-${size} align-self-center mx-2 spark`} style={{ color: colors.icon, height: 'fit-content' }}></i>
            </div>
        )
    }
}