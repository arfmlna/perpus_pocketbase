// pb_hooks/autoIncrementsupplier.pb.js

onRecordCreateExecute((e) => {
    const collectionName = e.record.collection().name;

    if (collectionName !== "supplier" && collectionName !== 'category') {
        return e.next();
    }
    switch (collectionName) {
        case 'supplier':
            try {
                const records = $app.findRecordsByFilter("supplier", "1=1", "-kode", 1);
                let nextNumber = 1;
        
                if (records && records.length > 0) {
                    const jsArray = Array.from(records);
                    const lastRecord = jsArray[0];    
        
                    if (lastRecord) {
                        const currentMax = lastRecord.get("kode");
                        nextNumber = (Number(currentMax) || 0) + 1;
                    }
                }
                let formattedString = nextNumber.toString().padStart(2, '0');
        
                e.record.set("kode", formattedString);
        
            } catch (err) {
                throw new BadRequestError("Sistem Gagal Memajukan Kode Teks: " + err.message);
            }
            break;
            
        case 'category':
            try {
                const records = $app.findRecordsByFilter("category", "1=1", "-kode", 1);
                let nextNumber = 1;
        
                if (records && records.length > 0) {
                    const jsArray = Array.from(records);
                    const lastRecord = jsArray[0];    
        
                    if (lastRecord) {
                        const currentMax = lastRecord.get("kode");
                        nextNumber = (Number(currentMax) || 0) + 1;
                    }
                }
                let formattedString = nextNumber.toString().padStart(2, '0');
        
                e.record.set("kode", formattedString);
        
            } catch (err) {
                throw new BadRequestError("Sistem Gagal Memajukan Kode Teks: " + err.message);
            }
            break;

        default:
            break;
    }

    return e.next();
});
