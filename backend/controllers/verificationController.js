const VerificationRequest = require('../models/VerificationRequest')
const Brand = require('../models/Brand')

const submitVerificationRequest = async (req, res) => {
    const { brandId, documentUrl } = req.body

    if (!brandId || !documentUrl) {
        res.status(400)
        throw new Error('Brand ID and document URL are required')
    }

    const brand = await Brand.findById(brandId)

    if (!brand) {
        res.status(404)
        throw new Error('Brand not found')
    }

    if (brand.owner.toString() !== req.user._id.toString()) {
        res.status(403)
        throw new Error('You can only verify your own brand')
    }

    const request = await VerificationRequest.create({
        brand: brandId,
        owner: req.user._id,
        documentUrl,
    })

    res.status(201).json(request)
}

const getVerificationRequests = async (req, res) => {
    const requests = await VerificationRequest.find()
        .populate('brand', 'name')
        .populate('owner', 'name email')
        .sort({ createdAt: -1 })

    res.json(requests)
}

const updateVerificationStatus = async (req, res) => {
    const { status, adminNote } = req.body

    if (!['approved', 'rejected'].includes(status)) {
        res.status(400)
        throw new Error('Status must be approved or rejected')
    }

    const request = await VerificationRequest.findById(req.params.id)

    if (!request) {
        res.status(404)
        throw new Error('Verification request not found')
    }

    request.status = status
    request.adminNote = adminNote || ''
    await request.save()

    if (status === 'approved') {
        await Brand.findByIdAndUpdate(request.brand, {
            isVerified: true,
        })
    }

    res.json(request)
}

module.exports = {
    submitVerificationRequest,
    getVerificationRequests,
    updateVerificationStatus,
}